function login(id, pw) {
    return new Promise(function (resolve, reject){
        setTimeout(function() {
            console.log("사용자 입장");
            resolve(id);
        },3000);
    })
}

function getVideo(id) {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            console.log(id + "의 비디오 리스트")
            resolve(['아바타', '라라랜드']);
        }, 2000);
    })
}

function getDetail(video) {
    return new Promise(function (resolve, reject) {
        setTimeout(function(){
            resolve("비디오 제목 : "+ video);
        },1000);
    })
}

login ('kim', '1234') // 로그인을 실행하는데 3초 기다리고 resolve를 실행해라 
.then (function(user){ // then 안에서 return을 하면 다음 then이 return 값을 받는다 then은 프로미스가 pending이면 기다린다. 
    return getVideo(user);})
    .then (function(videos){ //resolve 된 걸 .. 받아온다??  
    console.log("video", videos);
    return getDetail(videos[0]);})
    .then (function(msg){
    console.log(msg);
});
