const express = require("express");
const multer = require("multer"); // 파일 업로드 관련 패키지, npm으로 미리 설치하였음

const path = require('path'); // 아래에서 path 관련 코드를 사용하여 require 함
const app = express(); 
const port = 8000; 

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true})); 
app.use(express.json()); 
app.use( "/uploads", express.static( "uploads" ) ); // 이미지를 보여주기 위해 미들웨어 적용 필요

// 어떤 경로로 업로드 할 지 지정하기 
// const upload = multer({
// dest: "uploads/" // 저장 될 폴더가 만들어져 있어야함
// });

// 상세한 옵션
const upload = multer({
    storage : multer.diskStorage({ // 하드디스크에 저장할 때 사용하는 함수
        destination(req,file,done){ // destination 함수 자세하게 설정해주기 
            done( null, 'uploads/'); // 저장경로 설정

        },
        filename(req,file,done){
            console.log(req.body);
            const ext = path.extname(file.originalname);
            const filename = req.body.UserId + ext;
            done (null, filename );

        }
    })
});


// normal

app.listen(port, ()=>{
    console.log("server port : ", port);
});

app.get("/file", (req,res) => {
    res.render("file");
});

app.get("/join", (req,res) => {
    res.render("join");
});

app.post("/upload-single", upload.single("profile"), (req,res) => {
    console.log(req.file);
    res.render("result", {
        pathInfo: req.file });

});


// dynamic 

app.get("/register2", (req,res) => {
    res.render("practice36");
});
app.post("/register2", upload.single("userfile"), (req,res) => {
    res.send({ path: req.file.path } );
});



// app.post("/upload-single", upload.single("userfile"), (req,res) => {
//    console.log( req.file );
//    console.log( req.body );
//    res.send( "Upload Complete" );
// });


// app.post("/upload-array", upload.array("userfile"), (req,res) => {
//     console.log( req.files );
//     console.log( req.body );
//     res.send( "Upload Complete" );
// });

// app.post("/upload-fields", upload.fields([{name:'userfile1'}, {name:'userfile2'}, {name:'userfile3'}]), (req,res) => {
//     console.log( req.files );
//     console.log( req.body );
//     res.send( "Upload Complete" );
// });


