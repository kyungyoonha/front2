const express = require("express");
const router = express.Router();

const { validateSignUp, validateLogin } = require("../lib/validateAuth");

// Model
const UserModel = require("../models/UserModel");

router.post("/checkid", (req, res) => {
    UserModel.findOne({ userId: req.body.userId }, (user) => {
        if (!user) {
            res.status(200).send();
        } else {
            res.status(400).json({ message: "checkId error" });
        }
    });
});

router.post("/signup", (req, res) => {
    const { valid, errors } = validateSignUp(req.body);
    if (!valid) return res.status(400).json(errors);

    let userDB;
    UserModel.findOne({ userId: req.body.userId })
        .then((err, user) => {
            if (user) {
                res.status(400).json({
                    alert: "이미 가입되어 있는 회원정보가 있습니다.",
                });
            } else {
                userDB = new UserModel(req.body);
                return userDB.save();
            }
        })
        .then((data) => {
            const token = userDB.generateToken();
            res.json({ token });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: "서버오류" });
        });
});

router.post("/login", (req, res) => {
    const { valid, errors } = validateLogin(req.body);
    if (!valid) return res.status(400).json(errors);

    UserModel.findOne({ userId: req.body.userId }).then((user) => {
        if (!user) {
            res.status(400).json({
                alert: "존재하지 않는 아이디 입니다.",
            });
        } else {
            if (user.password === req.body.password) {
                const token = new UserModel(user).generateToken();
                res.json({ token });
            } else {
                res.status(400).json({
                    alert: "비밀번호를 다시 입력해주세요.",
                });
            }
        }
    });
});

module.exports = router;
