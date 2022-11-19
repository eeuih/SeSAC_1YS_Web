const num = require("./221117_module3-1.js");
const a = num.a; // 가져온 배열 중에서 a를 불러오겠다
const b = num.b; 

// const {a,b} = require("./221117_module3-1.js")) 사실 구조분해가 되어서 이렇게 들고 올 수 있음

function add() {
    return a + b;
}

module.exports = add ; // 내보내는 모듈의 형태에 따라 받는 형태도 달라진다. 함수를 모듈로 보낸것 
