const express =  require('express')
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname +  "/chat.html")
})

app.use('/public', express.static('public')); 

// {소켓 아이디 : 닉네임, ...}
let list = {}

io.on('connection', (socket) => {
    // console.log("Server Socket Connected");
    // io.emit('notice', socket.id + "님이 입장하셨습니다.")

    socket.emit('info', socket.id);

    socket.on("username", (name) => {
        list[socket.id] = name; // list 객체에 아이디라는 키와 이름이라는 값을 넣어 준다.
        io.emit('list', list)
        io.emit('notice', name + "님이 입장하셨습니다.");
    })

    socket.on ('send', (json)=>{
        // json = { msg : ~~, from : ~~, username : ~~~ }
        json['from'] = socket.id;
        json['username'] = list[socket.id];
        json['is_dm'] = false;
        if (json.to === '전체') io.emit('newMSG', json);
        else {
            json['is_dm'] = true
            const socketID = Object.keys(list).find(key => list[key] == json.to);
            io.to(socketID).emit('newMSG', json);
            socket.emit('newMSG', json)
        }
    })

    socket.on('disconnect', () => {
        io.emit('notice', list[socket.id] + "님이 퇴장하셨습니다.");
        delete list[socket.id];
        io.emit('list', list)
    })

})

http.listen(8000, ()=> {
    console.log('Server port : ', 8000);
})