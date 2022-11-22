const express = require("express");
const app = express(); // express 함수를 통해 app 객체를 만든다. 
const port = 8080; // 1023 이하의 숫자는 되지 않는다. 

app.set('view engine', 'ejs'); // views 폴더가 기본 디렉토리가 된다.

// 미들웨어를 등록한다.
app.use("/public", express.static("static/img")); 
//static 이라는 실제 존재하는 폴더를 public 이라는 경로로 접근할 수 있도록 함
// src="/public/img/peach.jpg"


// body-parser 
app.use(express.urlencoded({ extended: true})); // www-urlencoded 데이터 해석
app.use(express.json()); // 데이터를 json 형태로 파싱하겠다.


// 웹 서버 여는 코드 (포트번호, 함수)
app.listen(port, ()=>{
    console.log("server open : ", port);
}) 


// localhost:8080
app.get('/', (req, res)=>{
    res.send("hello express"); 
}) // (기본 주소(슬래시는 default 값이고, 보여주기 원하는 주소를 입력하면 됨), 함수(매개변수를 꼭 필요로 하는) )


// localhost:8080/test
app.get('/test', (req, res)=> {
    // res.send("안녕하세요 테스트입니다.");
    res.sendFile(__dirname + "/views/index.html");
    // 파일과 파일의 경로 
})


// localhost:8080/ejs
app.get('/ejs', (req, res)=> {
    res.render("index", { // ejs 확장자 쓰지 않아도 됨 
        title: "index 페이지입니다.",
        data : ["a","b","c"]
    }); 
})


// localhost:8080/img
app.get('/img', (req, res)=> {
    res.render("img")
})


// localhost:8080/form
app.get('/form', (req, res)=> {
    res.render("form")
})

app.get('/getForm', (req, res)=> {
    console.log(req.query); 
    res.send("get 요청 성공");
})

app.post('/postForm', (req, res)=> { // method 이름이 post 
    console.log(req.body); // query가 아니라 body 
    res.render("result", {data: req.body}); // 정보를 이렇게 보내줘야 사용할 수 있음 body라는 키로 보냄
})


// form 실습

app.get('/get_practice', (req,res)=> {
    res.render("get_practice")
})

app.get('/get', (req,res)=> {
    console.log(req.query); 
    res.send("get 요청 성공");
})

app.get('/post_practice', (req,res)=> {
    res.render("post_practice")
})

app.post('/post', (req,res)=> {
    console.log(req.body);
    res.send("post 요청 성공");
})