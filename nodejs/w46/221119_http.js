const http = require('http');
const fs = require('fs').promises;
const server = http.createServer(function(req,res){ // 웹 서버 사용할 때 쓰는 객체 생성, 클라이언트가 접속했을 때 실행해라 . 클라이언트 요청, 서버 응답 순
    // res.write("<h1>hello</h1>"); // 응답 본문 작성
    // res.end("<hr>"); // 응답 본문 작성 후 응답 종료 end가 없으면 무한 로딩
    fs.readFile("./test.html")
    .then(function(data){
        res.end(data.toString());

    });
}); 

/**
server.on() // 이벤트를 등록하는 함수
server.listen() // 서버를 실행하고 클라이언트를 기다리는 함수 
 */

server.listen(8080, function(){
    console.log("8080번 포트로 실행");
});
