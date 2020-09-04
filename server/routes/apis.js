const express = require("express");
const router = express.Router();

const BoardDB = require("../models/BoardModel");

router.get("/user", (req, res) => {
    res.json({ user: req.body.user });
});

router.post("/board", async (req, res) => {
    const pageSize = 4;
    const { find, currentPage } = req.body;

    try {
        if (find) {
            const data = await BoardDB.find({
                $or: [
                    { title: { $regex: ".*" + find + ".*" } },
                    { content: { $regex: ".*" + find + ".*" } },
                ],
            })
                .sort({ createdAt: -1 })
                .skip((currentPage - 1) * pageSize)
                .limit(pageSize);

            res.json({
                data,
                totalPage: Math.ceil(data.length / pageSize),
            });
        } else {
            const cnt = await BoardDB.count();
            const data = await BoardDB.find()
                .sort({ createdAt: -1 })
                .skip((currentPage - 1) * pageSize)
                .limit(pageSize);

            res.json({
                data,
                totalPage: Math.ceil(cnt / pageSize),
            });
        }
    } catch (err) {
        res.status(500).json({
            // 서버에러
            message: "POST /board",
            error: err,
        });
    }
});

router.get("/board/:id", async (req, res) => {
    try {
        const data = await BoardDB.findOne({ _id: req.params.id });
        res.json({ data: data });
    } catch (err) {
        res.status(404).json({ data: {} });
    }
});

router.post("/board/insert", async (req, res) => {
    try {
        const board = new BoardDB({
            userId: req.body.userId,
            title: req.body.title,
            content: req.body.content,
        });

        const data = await board.save();
        res.json({ data });
    } catch (err) {
        res.status(405).json({
            // 매칭 실패
            message: "POST /board/insert Error",
            error: err,
        });
    }
});

router.post("/board/update", async (req, res) => {
    try {
        const data = await BoardDB.findByIdAndUpdate(req.body._id, req.body, {
            new: true,
        });
        if (!data) {
            res.status(404).json({
                // 요청받은 리소스를 찾을 수 없음
                message: "POST /board/update Error",
            });
            return;
        }
        res.json({ data });
    } catch (err) {
        res.status(405).json({
            // 매칭실패
            message: "POST /board/update Error",
            error: err,
        });
    }
});

router.post("/board/delete", async (req, res) => {
    try {
        await BoardDB.findByIdAndRemove(req.body._id);
        res.status(204); // 성공했으나 응답할 데이터는 없음.
    } catch (err) {
        res.status(500).json({
            message: "POST /board/delete Error",
            error: err,
        });
    }
});

module.exports = router;
