const { Car } = require("./221117_class1-1.js"); // 분해해서 가져오겠다.
console.log(Car);

var car1 = new Car("red");
console.log(car1.returnColor());

var car2 = new Car("blue");
console.log(car2.returnColor());

var car3 = new Car("yellow");
console.log(car3.returnColor());