const Test = require("../model/Test");

exports.main = (req, res) => {
    let hi = Test.hello(); // Test.js의 hello 함수에서 return하는 값이 hi 에 담김
    res.send(hi);
    // res.render("index");
}

exports.test = (req, res) => {
    res.send("test");
}

exports.post = (req, res) => {
    res.send("post");
}


// 실습

exports.login = (req, res) => {
    res.render("index");
}

exports.login2 = (req, res) => {
    
    var info = Test.login();

    if(req.body.id == info.id && req.body.pw == info.pw) {
        res.send("<p style='color:blue'>로그인 성공!</p>");
    }
    else {
        res.send("<p style='color:red'>로그인 실패!</p>");

    };
}

exports.login22 = (req, res) => {
    let users = Test.user2();
    let user_list = users.split("\n")
    
    let login_flag = false; // res 한번만 응답할 수 있기 때문에 논리형으로 여부를 구분할 수 있도록
    let name = ""; // 이름이 들어갈 빈 문자열

    for(let i = 0; i <user_list.length; i++){
        let user = user_list[i].split("//");

        if(req.body.id == user[0] && req.body.pw == user[1]) {
            login_flag = true; 
            name = user[2];

            break;
        }
    
    }

    if(login_flag) res.send(`${name} 님 환영합니다.` );
    else res.send(`로그인 실패!`);

}