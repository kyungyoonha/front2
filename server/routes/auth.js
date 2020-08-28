const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
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
    UserModel.findOne({ userId: req.body.userId }).then((user) => {
        if (!user) {
            res.status(400).json({
                alert: "아이디 또는 비밀번호가 일치하지 않습니다.",
            });
        } else {
            const token = new UserModel(user).generateToken();
            res.json({ token });
        }
    });
});

module.exports = router;
