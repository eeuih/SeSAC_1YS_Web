/** function func1(value, call){ // 어떤걸 파라미터로 받는데, 그걸 실행하고 있음
    console.log(value);
    call();
}

func1('a', function(){  // 익명함수를 불러올 수 도 있고 
    console.log("1");
});

function func2(){ // 선언한 함수를 불러올 수도 있음
    console.log("2");
}

func1(func2); */


// func1 을 실행하고 > 

console.log("Start");
function login(id, cb){
    setTimeout(()=> {
        console.log("로그인 성공");
        cb (id);
    }, 2000);
}

login("kim", function(id) {
    console.log(id + "님 환영!");});
console.log("finish");