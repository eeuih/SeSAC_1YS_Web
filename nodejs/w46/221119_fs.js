 const fs = require("fs");
 const fs2 = require("fs").promises;

/** 
  
    fs.readFile("./test.txt", function(err, data){
//  if (err) throw err; //  에러를 던진다. 코드를 멈추겠다. 근데 이렇게 하면 노드.js 멈춰서 안좋은 방식임
    if (err) console.log(err); 

    console.log("data : ", data);
    console.log("data2 : ", data.toString());

});

fs2.readFile("./test.txt") // 프로미스 표현법
.then((data) => {
    console.log("promise - data : ", data);
}) 

fs2.writeFile("./write.txt", "sesac")
.then(function(){
    return fs2.readFile("./write.txt");
})
.then(function(data) {
    console.log(data.toString());
});

fs.writeFile("./write2.txt", "codingon", function(err){ // 콜백 표현법 
    if (err) throw err;
    console.log("writefile success");
    fs.readFile("./write2.txt", function(err,data){
        if(err) throw err;
        console.log("write2 file data : ", data.toString());
     })
});

 */

fs2.writeFile("./sesac.txt", "반갑습니다.")
.then(function(){
    return fs2.copyFile("./sesac.txt", "./sesac2.txt");
})
.then(function(){
    fs2.rename("./sesac2.txt", "./new.txt");
});



