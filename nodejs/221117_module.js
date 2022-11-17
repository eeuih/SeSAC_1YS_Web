const a = "a 변수";
const b = "b 변수"; 

function test() {
    console.log("test");
}

module.exports = { // 모듈로서 a,b라는 변수와 test라는 함수를 내보내겠다. 
    a,
    b, 
    test
};

