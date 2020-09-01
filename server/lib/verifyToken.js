const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");

const verifyToken = (req, res, next) => {
    const idToken = getTokenIdfromToken(req.headers.authorization);

    if (!idToken) {
        console.error("No Token Found");
        res.status(403).json({ error: "Unauthorized" });
    }
    const decoded = jwt.verify(idToken, process.env.JWT_SECRET);

    UserModel.findOne({ userId: decoded.userId })
        .then((user) => {
            req.body.user = {
                userId: user.userId,
                gender: user.gender,
                birth: user.birth,
                hobby: user.hobby,
            };
            next();
        })
        .catch((err) => {
            console.error("verifyToken error:", err);
            return res.status(403).json(err);
        });
};

const getTokenIdfromToken = (token) => {
    let idToken;
    if (token && token.indexOf("Bearer ") !== -1) {
        idToken = token.split("Bearer ")[1];
    }
    return idToken;
};

module.exports = {
    verifyToken,
    getTokenIdfromToken,
};
