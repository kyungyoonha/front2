const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const Schema = mongoose.Schema;
const { autoIncrement } = require("mongoose-plugin-autoinc");

const UserSchema = new mongoose.Schema({
    userId: String,
    hashedPassword: String,
    name: String,
    gender: String,
    birth: Date,
    hobby: Object,
    createdAt: {
        type: Date,
        default: Date.now,
        index: true,
    },
});

// 화살표 함수 사용하지 말것
UserSchema.methods.setPassword = async function (password) {
    this.hashedPassword = await bcrypt.hash(password, 10);
};

UserSchema.methods.checkPassword = async function (password) {
    const result = await bcrypt.compare(password, this.hashedPassword);
    return result; // true, false
};

UserSchema.methods.serialize = function () {
    const data = this.toJSON();
    delete data.hashedPassword;
    return data;
};

UserSchema.methods.generateAccessToken = function () {
    const addDay = 60 * 30; // 30분
    const token = jwt.sign(
        {
            userId: this.userId,
            exp: Math.floor(Date.now() / 1000) + addDay,
        },
        process.env.JWT_SECRET
    );
    return token;
};

UserSchema.methods.generateRefreshToken = function () {
    const addDay = 60 * 60 * 24 * 3; // 7일
    const token = jwt.sign(
        {
            exp: Math.floor(Date.now() / 1000) + addDay,
        },
        process.env.JWT_SECRET
    );
    return token;
};

UserSchema.plugin(autoIncrement, { model: "user", field: "id", startAt: 1 });
module.exports = mongoose.model("user", UserSchema);
