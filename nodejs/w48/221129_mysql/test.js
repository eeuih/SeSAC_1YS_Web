// mysql과 연결

const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user', 
    password: '1234',
    database: 'test_1'
})

cnn.query('select * from user', (err, result)=>{ // ('sql문', 콜백함수)
    if (err) throw err;
    console.log(result);
});
