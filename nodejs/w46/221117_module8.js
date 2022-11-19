let list = ["apple", "banana"]; 
[item1, item2] = list; // 배열 구조 분해, 배열 안의 값을 변수에 각각 저장할 수 있도록 코드를 짧게 

// let item1 = list[0];
// let item2 = list[1]; 이와 같은 명령어를 위처럼 편하게 작성 가능

// 이것 처럼 새로 값을 추가할 수도 있음 [item1, item2="peach", item3="orange"]; 

let x = 1;
let y = 3; 

[y,x] = [x,y] // 구조 분해 하겠다?

let obj = {
    a: "one",
    b: "two",
    c: "three",
    d: "four",
    f: "five"
};

let {a, b:key1} = obj; // 객체는 순서가 중요하지는 않다 .. b:key1 b값을 찾고 b의 이름을 key1으로 바꿔주는 명령
console.log(a);
console.log(key1);

let { b, ...rest } = obj; // ...rest 전개 연산자
console.log(b);
console.log(rest);