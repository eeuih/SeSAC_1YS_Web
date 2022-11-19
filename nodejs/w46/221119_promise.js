// new Promise(function(resolve, reject)) 프로미스 기본 구조

function func1(){
    return new Promise(function(resolve, reject){
        resolve("성공");
    });
    
}


// var a = func1();
// console.log(a);
func1().then(function(result){ // then 두개를 인자로 받는데, 앞의 프로미스에서 성공한 값을 받아옴 
    console.log("result : " , result);
}); 


function func2(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){resolve("성공");},1000);
    });
    
}
var b = func2();
console.log(b);

func2().then(function(result){ //펜딩이 끝날 때 까지 기다렸다가 resolve 내용을 받아옴 
    console.log("result2 : ", result);
    return "a"; // 체이닝이란 같은 라인에서 연결이 되어 있는 것
}).then(function(abc){
    console.log("abc : ", abc);
});