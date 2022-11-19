/** global 내장객체 */

console.log(global);
console.log(global.console);


/** console 내장객체 */

let obj = {
    out: {
        in: {
            key : 'value'
        }
    }
};

console.log(obj);
console.log(obj['out']);
console.time("시간");
console.log("a");
console.error("error");
console.timeEnd("시간");
console.table([{name: 'abc'}, {name: 'def'}]); // 콘솔을 표 형태로 보여주는 함수 
console.dir(obj, {colors: true, depth: 1}); // 객체의 구조를 보여주는 함수
console.dir(obj, {colors: true, depth: 2});
console.trace("Error"); // 에러가 어디에 있는지 찾아주는 함수 



/** Timer 메소드 */


const func1 = setTimeout( function() { // 익명 함수 형태 ~! 
    console.log("1.5초 후 실행");
}, 1500);

const func2 = setInterval(() => {
    console.log("1초마다 반복");
}, 1000); 

const func3 = setTimeout(() => {
    console.log("func3 실행");
}, 3000);

setTimeout (() => {
    clearTimeout(func3);
    clearTimeout(func2);
}, 2500)


const func4 = setImmediate(() => {
    console.log("func4 즉시 실행");
});

const func5 = setImmediate(() => {
    console.log("func5 즉시 실행");
});

clearImmediate(func5); 



/** 파일명과 경로를 알 수 있는 명령어  */
console.log(__filename);
console.log(__dirname);


/** process 객체 현재 실행 중인 노드 프로세스의 정보 */

console.log("process.version : ", process.version); 
console.log("process.arch : ", process.arch); 
console.log("process.platform : ", process.platform); 
console.log("process.cpuUsage : ", process.cpuUsage()); 


/** OS 모듈 */ 

const os = require("os"); // 모듈이라 require 로 불러와야 함 (내장 모듈이라 로드만 하면 됨)
console.log(os.type());
console.log(os.cpus());
console.log(os.homedir());
console.log(os.freemem());


/** path 모듈 */

const path = require("path");
const file = __filename;
console.log("path.extname : ", path.extname(file));
console.log("path.parse : ", path.parse(file)); // 구분을 지어주는 
