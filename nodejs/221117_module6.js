//* url 모듈 !  */


const url = require("url");
// console.log(url);
// console.log(url.parse); // 함수 입니다 !! 
// var obj = url.parse("https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=node.js&oquery=node&tqi=h3UgSdprvhGssAKyfGRssssssS8-395246");
// console.log(url.format(obj)); // 문자열로 변환 해주는 명령어


var string = new url.URL("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EA%B2%80%EC%83%89");
console.log(string.searchParams.getAll("where"));
console.log(string.searchParams.keys());
string.searchParams.append('age','20'); // 추가하는 명령어 
console.log(string.searchParams.getAll("age"));
console.log(string.searchParams.has('abc')); // abc로 해당하는 내용이 있는지 확인하는 명령어 