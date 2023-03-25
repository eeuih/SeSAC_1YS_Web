// 변수 
// 키워드 변수이름:타입 = 값; 
// 타입표기(type annotation)
const str:string = "string";
const num:number = 1;
const bool:boolean = true;

// object 타입
const arr1:number[]=[1,2,3];
const arr2:string[] = ['a', 'b','c'];
const arr3:Array<number> = [22,3];
console.log(arr2[0].concat('!'));

// tuple 값,길이 고정
const arr4:[boolean,string] = [true ,'a'];
// console.log(arr4[0].concat('!')) concat string에만 써서 오류 남. 

// enum 열거하는 집합 의미 
enum Names { sesac, 새싹 }
const name1:Names = Names.sesac;
const name2:Names = Names.새싹;
//console.log(name1);
//console.log(name2);

// any : 모든 타입을 허용 
// 최대한 안 쓰는 게 좋다. 타입을 명확히 하고 오류를 안 내기 위함인데.

const any1: any = [1,2,3];
const any2: any = 1;

// void : undefined 와 null만 들어갈 수 있는 타입
// 변수에는 많이 안쓰고 함수에는 쓸 수 있을 듯.. 함수의 return 값이 없을 때 등 

// never : 절대 끝에 도달하지 않는 .. . . .경우에 부여 

// function neverEnd():never{
//     while(true){ 왜.. 이걸 하는 걸까???        
//     }
// }

// 함수 
// (매개변수: type) : <return>
// function 함수이름 (매개변수:type) : 반환타입 {}
function sum1(a:number, b:number) :number {
    return a + b;
};

console.log(sum1(1,2));

function sum2(a:number, b?:number) :void {
    console.log(a)
    console.log(b)
}
sum2(1)
sum2(1,2)

// interface 여기저기서 사용 할 수 있으니 전역으로.. 설정해두는 경우가 많음

interface Student {
    name: string,
    age: number,
    nickname?: string
}

const student1: Student = {
    name: '이름1',
    age: 10
}

const student2: Student = {
    name: '이름2',
    age: 10,
    nickname: '닉넴'
}
console.log("------------------------------------------")
console.log(student1)
console.log(student2)
console.log("------------------------------------------")

function check(stu:Student) {
    console.log(stu.name)
}
check(student1)
check(student2)

// class

// class 클래스이름 {
//     변수명: 타입;
//     constructor(변수:타입) {
//         this.변수명 = 변수
//     }
// }

class Person {
    id: string;
    constructor(name:string, age:number){
        this.id = name + age;
    }
}

const person1 = new Person('이름3', 30);
console.log(person1.id) 

interface Shape {
    width: number;
    getLength(): number;
}

class Square implements Shape {
    constructor (readonly width:number){} // this.. 멀 해주는 역할..
    getLength():number {
        return this.width;
    }
}

const square1 = new Square(10);
console.log(square1.getLength());

// 함수도 정의 할 수 있다!? 

class Person2 {
    constructor(public name: string, private age: number) {
        this.name = name;
        this.age = age;
    }
}

const person3 = new Person2('a',1);
console.log(person3.name)
// console.log(person3.age); private 속성이라 접근 불가능하다고 오류뜸!


// 제네릭 (Generic) 재사용성 높은 컴포넌트를 만들기 위해.. 여러가지 타입에서 동작하는 
function getText<T>(text:T):T { // 받은 값과 return 값의 타입이 같았으면 좋겠다.. 일 때. 꺽쇠. 
    return text;
}

console.log(getText<string>('a'))