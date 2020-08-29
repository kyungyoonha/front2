// {
//     "id": 1,
//     "userId": "userid",
//     "title": "오늘도 알차게",
//     "content": "컨텐츠 내용",
//     "date": "2020-08-07T08:53:25.948Z"
// },

const mongoose = require("mongoose");
const { autoIncrement } = require("mongoose-plugin-autoinc");

const BoardModel = new mongoose.Schema({
    userId: String,
    title: String,
    content: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

BoardModel.plugin(autoIncrement, { model: "board", field: "id", startAt: 1 });
module.exports = mongoose.model("board", BoardModel);
