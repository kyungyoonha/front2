const mongoose = require("mongoose");
const { autoIncrement } = require("mongoose-plugin-autoinc");

const TokenModel = new mongoose.Schema({
    userId: String,
    token: String,
});

TokenModel.plugin(autoIncrement, { model: "token", field: "id", startAt: 1 });
module.exports = mongoose.model("token", TokenModel);
