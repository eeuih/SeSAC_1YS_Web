const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({ extended:false }));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req,res)=>{
    res.send("hello");
});

const option = {
    httpOnly: true, 
    maxAge: 864000
    // expires: "2022-12-09T09:00:00",
    // path: "/visitor",
    // secure: false,
    // signed: 
};

app.get("/set", (req,res)=>{ 
    res.cookie("test", "1", option);
    res.send("쿠키 생성 성공"); // 서버가 클라이언트에 보내는 응답 
});

app.get("/get", (req,res)=>{
    console.log(req.cookies);
    res.send(req.cookies); // 쿠키를 가져오는 요청
});


app.listen(port, ()=>{
    console.log("Server open", port);
});