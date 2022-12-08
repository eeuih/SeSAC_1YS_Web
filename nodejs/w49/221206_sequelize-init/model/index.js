const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"]; 
// json 파일이라서 확장자까지 적어줘야하고, 
// json 파일에 설정한 개발환경으로 사용하기 위해 개발환경 키를 선택해줘야함

const db = {};

// connection 을 위한 코드
const sequelize = new Sequelize( //인자 4개를 넣는다. 
    config.database, // config 파일을 불러오는 config 변수의 값들과 config 자체
    config.username,
    config.password,
    config
);

db.sequelize = sequelize; 
db.Sequelize = Sequelize;



db.Visitor = require("./Visitor")(sequelize, Sequelize)  // 9번째 줄, 1번째 줄을 인자로 
// 함수를 실행해야만 모델이 정의 되므로 실행한다. 

// db = { 16,17줄의 결과
//  "Sequelize" : Sequelize,
//  "sequelize" : sequelize,
//  "Visitor" : Visitor.js에서 return 받은 값
// };

db.Users = require("./User")(sequelize, Sequelize)

module.exports = db;