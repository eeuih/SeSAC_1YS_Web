const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");

app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

const router = require("./routes"); // 모듈을 불러오겠다. 
app.use('/', router); // /로 들어오는 요청에 대한 설정

app.get('*', (req, res)=> { // 정의해 둔 라우터가 아닌 라우터로 접속했을 때 error로 렌더하겠다.
    res.send('주소가 존재하지 않습니다.'); // 모든 라우터를 다 정의한 다음 마지막에 써야 한다. 
})

app.listen(port, ()=> {
    console.log("Server open: ", port);
});
