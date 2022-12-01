const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user', 
    password: '1234',
    database: 'test_1'
});

exports.get_visitor = (cb) => { // cb라는 매개변수로 받는다.
    var sql = 'SELECT * FROM visitor';
    
    cnn.query(sql, (err, rows)=> { // sql 결과를 rows로 반환
        if(err) throw err;
        console.log("visitors : ", rows); 
        cb(rows); // 함수처럼 사용되고 있구나.. 콜백에서 받아온 get_visitor를 여기서 실행
    }) 
}

exports.register_visitor = (info, cb) => { // info 에는 req.body 정보가 들어있음
    
    var sql = `INSERT INTO visitor(name, comment) values('${info.name}', '${info.comment}' );`;

    cnn.query(sql, (err, result) => {
        if (err) throw err;

        console.log("insert result: ", result);
        cb(result.insertId);

    })
}