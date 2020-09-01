const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const { validateSignUp, validateLogin } = require("../lib/validateAuth");
const { getTokenIdfromToken } = require("../lib/verifyToken");

// Model
const UserModel = require("../models/UserModel");
const TokenModel = require("../models/tokenModel");

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

            const accessToken = userDB.generateAccessToken();
            const refreshToken = userDB.generateRefreshToken();

            const tokenDB = new TokenModel({
                userId: req.body.userId,
                token: refreshToken,
            });
            await tokenDB.save();

            res.status(200).json({ token: { accessToken, refreshToken } });
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
                const accessToken = new UserModel(user).generateAccessToken();
                const refreshToken = new UserModel(user).generateRefreshToken();

                const tokenDB = await TokenModel.findOne({
                    userId: req.body.userId,
                });
                if (tokenDB) {
                    tokenDB.token = refreshToken;
                    await tokenDB.save();
                }

                res.json({ token: { accessToken, refreshToken } });
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
});

router.post("/token", async (req, res) => {
    try {
        const accessTokenId = getTokenIdfromToken(req.body.token.accessToken);
        const refreshTokenId = getTokenIdfromToken(req.body.token.refreshToken);

        const userId = jwt.verify(accessTokenId, process.env.JWT_SECRET, {
            ignoreExpiration: true,
        }).userId;
        const { token } = await TokenModel.findOne({ userId: userId });
        if (token === refreshTokenId) {
            const decodedToken = jwt.verify(
                refreshTokenId,
                process.env.JWT_SECRET,
                { ignoreExpiration: true }
            );
            if (decodedToken.exp * 1000 > Date.now()) {
                console.log("재발급");
                const newAccessToken = new UserModel({
                    userId,
                }).generateAccessToken();
                res.json({ accessToken: newAccessToken });
            } else {
                res.json({
                    message: "refresh token expired. please log in again",
                });
            }
        }
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
