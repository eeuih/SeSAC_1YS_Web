const express = require("express");
const app = express();
const mysql = require("mysql");
const port = 8000;

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user', 
    password: '1234',
    database: 'test_1'
});

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    cnn.query('select * from user', (err, result)=>{ // ('sql문', 콜백함수)
        if (err) throw err;

        console.log(result);
        res.render("index",{rows: result});
    });
    
});

app.listen(port, ()=>{
    console.log(port, " open");
})

