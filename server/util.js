const jwt = require("jsonwebtoken");

exports.generateToken = (user) => {
    const addDay = 60 * 60 * 24 * 3; // 3일
    const token = jwt.sign(
        {
            _id: user.id,
            userId: user.userId,
            exp: Math.floor(Date.now() / 1000) + addDay,
        },
        process.env.JWT_SECRET
    );
    return token;
};
