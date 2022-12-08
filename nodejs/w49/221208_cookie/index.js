const express = require("express");
const session = require("express-session");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

app.use(session({
    secret: '1234',
    resave: false,
    saveUninitialized: true,
//  cookie:,
//  secure:
}));

app.get("/", (req, res)=>{
    if(req.session.user) res.render("main", {isLogin: true});
    else res.render("index", {isLogin: false});
});

// app.get("/setSession", (req,res)=>{
//     req.session.user = "id"; // 세션 저장, 클라이언트의 요청 
//     res.send("세션 생성 성공")
// });

const user = {id: "a", pw:"1"};

app.post("/login", (req,res)=>{

if(req.body.id == user.id&& req.body.pw== user.pw){
    req.session.user = req.body.id;
    res.send("로그인 성공");
}

else{res.send("로그인 실패");}

});



app.delete("/logout", (req,res)=>{
     req.session.destroy(function(err){ // 세션에서 사용하는 destroy 함수 
         if(err) throw err;
         res.send("로그아웃 성공!")
     })
 });

app.listen(port, ()=>{
    console.log("Server open", port);
});