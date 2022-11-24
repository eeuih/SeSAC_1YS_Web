const express = require("express");
const app = express(); 
const port = 8000; 

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true})); 
app.use(express.json()); 

app.listen(port, ()=>{
    console.log("server open : ", port);
});

// axios 
app.get('/', (req,res)=> {
    res.render('index');
}); 


app.get("/form", function(req,res){
    console.log(req.query);
    res.send({msg : "이름 : " + req.query.name});
    
});

app.post("/form", function(req,res){
    console.log(req.body);
    res.send({msg: "post - 이름 : " + req.body.name});
    
});


// ajax
app.get('/2', (req,res)=>{
    res.render('index_ajax');
});

app.get("/ajax", function(req,res){
    console.log(req.query);
    res.send({msg : "get 이름 : " + req.query.name});
});

app.post("/ajax", function(req,res){
    console.log(req.body);
    res.send({msg : "post 이름 : "+ req.body.name});
});


// fetch
app.get('/3', (req,res)=>{
    res.render('index_fetch');
});

app.get("/fetch", function(req,res){
    console.log(req.query);
    res.send({msg : "get 이름 : " + req.query.name});
});

app.post("/fetch", function(req,res){
    console.log(req.body);
    res.send({msg : "post 이름 : "+ req.body.name});
})


// GET 실습 
app.get('/dynamic_get', (req,res )=> {
    res.render('dynamic_get');
});

app.get('/getForm', function(req,res){
    console.log(req.query);
    res.send(req.query);

});


// POST 실습 
app.get('/login', (req,res)=> {
    res.render('login');
});

app.post("/login2", function(req,res){

    var id = "abcd";
    var pw = "1234";

    if(req.body.id == id && req.body.pw == pw) {
        res.send("<p style='color:blue'>로그인 성공!</p>");
    }
    else {
        res.send("<p style='color:red'>로그인 실패!</p>");

    }
});