const express = require("express");
const router = express.Router();
const { generateToken } = require("../util");
// Model
const UserModel = require("../models/UserModel");

router.post("/checkid", (req, res) => {
    UserModel.findOne({ userId: req.body.userId }, (err, user) => {
        if (!user) {
            res.status(200).send();
        } else {
            res.status(400).json({ message: "checkId error" });
        }
    });
});

router.post("/signup", (req, res) => {
    UserModel.findOne({ userId: req.body.userId }, (err, user) => {
        if (!user) {
            const userDB = new UserModel(req.body);
            const token = generateToken(user);

            userDB.save((err) => {
                res.json({ token });
            });
        } else {
            res.status(400).json({
                alert: "가입되어 있는 회원정보가 없습니다.",
            });
        }
    });

    /*
    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
        httpOnly: true,
    });
    */
});

router.post("/login", (req, res) => {
    UserModel.findOne({ userId: req.body.userId }, (err, user) => {
        if (user) {
            const token = generateToken(user);
            res.json({ token });
        } else {
            res.status(400).json({
                alert: "아이디 또는 비밀번호가 일치하지 않습니다.",
            });
        }
    });
});

module.exports = router;
