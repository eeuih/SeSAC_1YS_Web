function call(name, msg, cb){
    setTimeout(function(){
        console.log("사용자는 " + name);
        console.log("시작은 " + msg);
        cb();
   
    }, 2000);
    
}

function back(msg, cb) {
    setTimeout(function(){
        console.log("두번째는 "+ msg);
        cb();

    }, 1000);
    
}

function hell(msg) {
    setTimeout(function(){
        console.log("세번째는 "+ msg);

    }, 1500);
}

call('kim', "call", function(){
    back("back", function(){
        hell("hell")
    });
});


