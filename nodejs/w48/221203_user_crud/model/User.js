const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user', 
    password: '1234',
    database: 'test_1'
});

exports.signup_user = (info, cb) => {
    var sql = `insert into users(id, pw, name) values ('${info.id}', '${info.pw}','${info.name}');`;

    cnn.query(sql, (err, result)=>{
        if(err) throw err;
        console.log("insert result : ", result);
        cb();
    })

}

exports.login_user = (userinfo, cb)=>{
    
    var sql = `select * from users where id='${userinfo.id}' and pw='${userinfo.pw}' limit 1;`;

    cnn.query(sql, (err, result)=> {
        if (err) throw err;
   
        
        cb(result);
    })


}

