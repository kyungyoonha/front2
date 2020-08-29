const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
// const Schema = mongoose.Schema;
const { autoIncrement } = require("mongoose-plugin-autoinc");

const UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, "아이디는 필수 입니다."],
    },
    password: {
        type: String,
        required: [true, "비밀번호는 필수 입니다."],
    },
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

UserSchema.methods.generateToken = function () {
    const addDay = 60 * 60 * 24 * 3; // 3일
    const token = jwt.sign(
        {
            userId: this.userId,
            exp: Math.floor(Date.now() / 1000) + addDay,
        },
        process.env.JWT_SECRET
    );
    return token;
};

UserSchema.plugin(autoIncrement, { model: "user", field: "id", startAt: 1 });
module.exports = mongoose.model("user", UserSchema);
