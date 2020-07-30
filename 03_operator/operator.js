// 1. String concatenation 
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder (나머지)
console.log(2 ** 3); //exponentiation (제곱)

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;

const preDecrement = --counter;
// counter = counter - 1;
// preIncrement = counter;

const postDecrement = counter--;
// postIncrement = counter;
// counter = counter - 1;

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators

console.log(10 < 6);  // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6);  // greater than
console.log(10 >= 6);  // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)

const value1 = true;
const value2 = 4 < 2;

// || (or), 조건 중 하나라도 true면 된다.
console.log(`or: ${value1 || value || check()}`);

// && (and), 모든 조건이 true 여야 한다.
console.log(`or: ${value1 || value || check()}`);

// 여기서 잠깐 ! 
// *****만약 check() 함수가 제일 앞에 왔더라면? -> 비효율적 !!!!!!*** 
// 헤비할 수록 뒤로 보내라!!!

// 그리고 &&(and)는 null 체크할 때 자주 사용된다.
// often used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//   nullableObject.something;
// }

function check() {
  for (let i = 0; i < 10; i++) {
    console.log('😂')
  }
  return true;
}

// ! (not) --> true / false 값을 반대로 바꿔줌
console.log(!value1); 

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion (숫자만 같으면됨)
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// *추천* === strict equality, no with type conversion (숫자, 데이터타입 모두 같아야함)
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const pyo1 = {name : 'pyo'};
const pyo2 = {name : 'pyo'};
const pyo3 = pyo1
console.log(pyo1 == pyo2); // false
console.log(pyo1 === pyo2); // false
console.log(pyo1 === pyo3); // true

// Quiz
console.log(0 == false);  // t
console.log(0 === false); // f (데이터 타입이 달라서 0은 boolean type이 아님)
console.log('' == false); // t
console.log('' === false); // f (''도 boolean type이 아님)
console.log(null == undefined); // t
console.log(null === undefined); // f (둘은 데이터 타입이 다름)

// 8. Conditional operators: if
// if, else if, else

const name = 'df'
if (name === 'pyo') {
  console.log('Welcome, Pyo!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unkwnon');
}

// 9. Ternary operator: ?
// condition ? value1(true) : value2(false);
// 이것은 식이 간단할 때만 쓰기. 가독성을 위해.
console.log(name === 'pyo' ? 'yes' : 'no')

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
// if - else 문이 많이 반복되거나 정해진 타입을 검사할 때 switch 쓰는게 가독성 up!
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--
}

// do while loop, body code is ceccuted first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
} while (i > 0); 

// 조건문이 맞을 때만 블럭을 실행하고 싶으면 while문
// 블럭을 먼저 실행하고 조건을 검사하고 싶을 땐 do while문

// for loop, for(begin; condition; step) begin은 딱 1번 호출
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline valiable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (i = 0; i < 10; i++) {
  for( j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
  for(let i = 0; i < 11; i ++) {
    if(i % 2 === 0) {
      console.log(i)
    } else {
      continue;
    }
  }
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
  for (let i = 0; i < 11; i++) {
    console.log(i);
    if(i == 8) {
      break;
    }
  }