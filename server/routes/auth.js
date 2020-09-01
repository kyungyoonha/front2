const express = require("express");
const router = express.Router();

const { validateSignUp, validateLogin } = require("../lib/validateAuth");

// Model
const UserModel = require("../models/UserModel");

router.post("/checkid", (req, res) => {
    UserModel.findOne({ userId: req.body.userId })
        .then((user) => {
            if (user) {
                res.status(400).json({
                    userId: "이미 존재하는 아이디 입니다.",
                });
            } else {
                res.status(204).json({ alert: "사용 가능한 아이디입니다." });
            }
        })
        .catch((err) =>
            res.status(500).json({ message: "POST /checkId Error:", err })
        );
});

router.post("/signup", async (req, res) => {
    const { valid, errors } = validateSignUp(req.body);
    if (!valid) return res.status(400).json(errors);
    try {
        const user = await UserModel.findOne({ userId: req.body.userId });
        if (user) {
            res.status(400).json({
                alert: "이미 가입되어 있는 회원정보가 있습니다.",
            });
        } else {
            const userDB = new UserModel(req.body);
            await userDB.setPassword(req.body.password);
            await userDB.save();

            const token = userDB.generateToken();
            res.status(200).json({ token });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "POST /signup Error:", err });
    }
});

router.post("/login", async (req, res) => {
    const { valid, errors } = validateLogin(req.body);
    if (!valid) return res.status(400).json(errors);

    try {
        const user = await UserModel.findOne({ userId: req.body.userId });
        if (!user) {
            res.status(400).json({
                userId: "존재하지 않는 아이디 입니다.",
            });
        } else {
            const isValid = await user.checkPassword(req.body.password);

            if (isValid) {
                const token = new UserModel(user).generateToken();
                res.json({ token });
            } else {
                res.status(400).json({
                    password: "비밀번호를 다시 입력해주세요.",
                });
            }
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "POST /signup Error:", err });
    }

    // UserModel.findOne({ userId: req.body.userId })
    //     .then((user) => {
    //         if (!user) {
    //             res.status(400).json({
    //                 userId: "존재하지 않는 아이디 입니다.",
    //             });
    //         } else {
    //             if (user.password === req.body.password) {
    //                 const token = new UserModel(user).generateToken();
    //                 res.json({ token });
    //             } else {
    //                 res.status(400).json({
    //                     password: "비밀번호를 다시 입력해주세요.",
    //                 });
    //             }
    //         }
    //     })
    //     .catch((err) => {
    //         res.status(500).json({ message: "POST /login Error:", err });
    //     });
});

module.exports = router;
