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

const user = {id: "a", pw:"1"};

app.get("/", (req, res)=>{
    console.log(req.session.user);
    if(req.session.user) res.render("index", {isLogin: true, id: req.session.user}); // 데이터와 함께 렌더
    else res.render("index", {isLogin: false});
});

// app.get("/setSession", (req,res)=>{
//     req.session.user = "id"; // 세션 저장, 클라이언트의 요청 
//     res.send("세션 생성 성공")
// });

app.get("/login", (req,res)=> {
    res.render("login");
});

app.post("/login", (req,res)=>{
    if(req.body.id == user.id && req.body.pw == user.pw) {
        req.session.user = req.body.id;
        res.send(true);
    } else {
        res.send(false);
    }
})

app.delete("/logout", (req,res)=>{
     req.session.destroy(function(err){ // 세션에서 사용하는 destroy 함수 
         if(err) throw err;
         res.send("로그아웃 성공!")
     })
 });


// get 방식 로그아웃 함수 없이 동적 폼 없이 링크로 보내도 됨
// app.get("/logout", (req,res)=>{
//     req.session.destroy(function(err){
//         if(err) throw err;
//         res.redirect("/");
//     });
// })



app.listen(port, ()=>{
    console.log("Server open", port);
});