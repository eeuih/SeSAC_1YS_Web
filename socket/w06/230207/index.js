const express =  require('express')
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

// 클라이언트 소켓이 연결 되면 콜백 함수 실행 
// socket : 클라이언트 소켓과 연결 되고 새로 생성된 소켓

io.on('connection', (socket) => {

    // console.log('Server Socket Connected');
    // socket.emit('welcome', {msg : 'welcome'});
    // socket.on('disconnect', ()=> {
    //     console.log('Server Socket disconnected');
    // })
    // socket.on('response', (str) => { console.log(str); })

    let data = {hello: '안녕하세요!', study: '공부하세요!', bye: '안녕히 가세요!'}

    socket.on('send', (msg) => {
        console.log(msg)
        socket.emit('response', msg + " : " + data[msg])
    })
})

http.listen(8000, ()=> {
    console.log('Server port : ', 8000);
})