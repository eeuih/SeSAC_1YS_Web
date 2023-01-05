// @ts-check
// 전개 연산자
const arr = [1, 2, 3, 4, 5];
const copyArr = [...arr];
console.log(arr);
console.log(copyArr);
console.log(arr === copyArr);

const obj = {
  pororo: '뽀로로',
  lupy: '루피',
  crong: '크롱',
};

const copyObj = { ...obj, lupy: 'lupy' };

console.log(obj);
console.log(copyObj);
console.log(obj === copyObj);
