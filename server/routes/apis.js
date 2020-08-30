const express = require("express");
const router = express.Router();

const BoardDB = require("../models/BoardModel");

router.get("/user", (req, res) => {
    res.json({ user: req.body.user });
});

router.post("/board", (req, res) => {
    const pageSize = 4;
    const { currentPage } = req.body;
    BoardDB.find() //
        .sort({ createdAt: -1 })
        .skip((currentPage - 1) * pageSize)
        .limit(pageSize)
        .then((data) => {
            BoardDB.count().then((cnt) => {
                res.json({ data, totalPage: Math.ceil(cnt / pageSize) });
            });
        });
});

router.post("/board/insert", (req, res) => {
    const board = new BoardDB({
        userId: req.body.userId,
        title: req.body.title,
        content: req.body.content,
    });
    board
        .save()
        .then((data) => {
            res.json({ data });
        })
        .catch((err) => {
            console.error(err);
        });
});

router.post("/board/update", (req, res) => {
    BoardDB.findByIdAndUpdate(req.body._id, req.body, { new: true })
        .then((data) => {
            if (!data) {
                res.status(404).json({
                    // 요청받은 리소스를 찾을 수 없음
                    message: "POST /board/update Error",
                });
                return;
            }
            res.json({ data });
        })
        .catch((err) => {
            res.status(405).json({
                // 서버에러
                message: "POST /board/update Error",
                error: err,
            });
        });
});

router.post("/board/delete", (req, res) => {
    BoardDB.findByIdAndRemove(req.body._id)
        .then((data) => {
            res.status(204); // 성공했으나 응답할 데이터는 없음.
        })
        .catch((err) => {
            res.status(500).json({
                message: "POST /board/delete Error",
                error: err,
            });
        });
});

module.exports = router;
