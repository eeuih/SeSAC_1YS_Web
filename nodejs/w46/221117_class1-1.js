class Car {
    constructor(color) { //초기화 함수? 파라미터를 통해 color값을 받음
        this.color = color;
        this.isDoor = true;
    }

    move(){
        console.log("움직인다.");
    }

    stop(){
        console.log("멈춘다.");
    }

    returnColor(){
        return this.color; 
    }
}

module.exports = { Car } ; // 클래스를 객체로 감싸서 모듈로 내보낸다.