//* url 모듈 실습  */


const url = require("url");

var string = new url.URL("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=sesac");
console.log("1)", string.searchParams.keys());
console.log("2)", string.searchParams.values());
string.searchParams.delete('sm'); //
console.log("3)", string.searchParams.keys());