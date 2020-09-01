require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 8080;
const { verifyToken } = require("./lib/verifyToken");

// DB
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error);
db.once("open", () => console.log("DB connected successfully"));
mongoose.connect("mongodb://127.0.0.1:27017/mission", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const auth = require("./routes/auth");
const apis = require("./routes/apis");

// 미들웨어

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// 라우터
app.use("/auth", auth); // verifyToken
app.use("/apis", verifyToken, apis); // 리프레시 토큰, 자동 재갱신

app.listen(port, () => {
    console.log("Express listening on port", port);
});

/*

node. 미들웨어. body-parser: Post request 처리할때 쓰인다.
node. 미들웨어. body-parser: 처음 request.body는 default 값이 undefined 이므로 데이터를 가지고 올수 없음
node. 미들웨어. body-parser: 설치 후에는 request.body로 데이터 값을 쉽게 가지고 올 수 있다.

res.send('텍스트')
res.json({message: "Json 형태"})
res.redirect('/auth/login');
res.render('admin/products', { products : results , pages: pages,  });
res.status(404)

UserModel.find((err, data) => {}) => 전체 데이터
UserModel.find({ userId: req.body.userId }, (err, data) => {}) 일치하는 데이터 다 가져옴
UserModel.findeOne({ userId: req.body.userId }) => 일치하는 데이터 하나만
UserModel.update({ userId: req.body.userId }, { $set: { name: '홍길동' }}, (err) => {}) => 특정 필드만 업데이트 할때 $set
UserModel.remove({ userId: req.body.userId }, (err) => {})

/*
유저정보 처리. 서버. FBAuth 미들웨어로 토큰 검증하고 토큰 유효하면 유저 정보를 requset 변수에 담아 해당 라우터로 넘겨준다.
유저정보 처리. 서버. 데이터를 보내야하는 모든 GET, POST에 토큰을 검증하는 미들웨어를 넣어줘야한다.
유저정보 처리. 서버. 미들웨어를 통과하고 난 후 해당 라우터에서 request를 통해 유저 정보를 받아올 수 있음. 
유저정보 처리. 서버. 클라이언트가 요청한 데이터에 유저정보를 같이 넣어 response 보내줌
유저정보 처리. 클라이언트. 로그인/회원가입 시 토큰을 발급 받아 헤더에 저장한다.
유저정보 처리. 클라이언트. 현재 로그인 유저 정보는 로그인이나 회원가입시에 state에 저장하는 것보다는 따로 api요청을(GET /user) 보낸다.
유저정보 처리. 클라이언트. 로그인 이나 회원가입은 에러가 있는지만 확인해주면 된다. 따로 response.data 받을 필요 없음

MongoDB. methods. function.
MongoDB. methods. function. 화살표 함수 쓰지말 것

*/
