const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || 'development';
const config= require(__dirname + '/../config/index.js')[env]

// const config = require("../config/config.json")["development"]; 
// json 파일이라서 확장자까지 적어줘야하고, 
// json 파일에 설정한 개발환경으로 사용하기 위해 개발환경 키를 선택해줘야함

const db = {};

// connection 을 위한 코드
const sequelize = new Sequelize( //인자 4개를 넣는다. 
   config.database,
   config.username,
   config.password,
   config
);

db.sequelize = sequelize; 
db.Sequelize = Sequelize;



db.zwMap = require("./Test")(sequelize, Sequelize)  // 9번째 줄, 1번째 줄을 인자로 

module.exports = db;

