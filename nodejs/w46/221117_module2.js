const result = require("./221117_module.js");

console.log(result);
console.log(result.a);
console.log(result.b);
console.log(result.test); // 함수가 정의되어있는 상태만 불러와짐
result.test(); // 함수를 실행할 때는 이렇게 불러와야함


// 키, 값으로 불러와지네 