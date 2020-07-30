// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// -p performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) {body ... return;}
// one function === one thing (한개의 함수는 한개의 일을)
// naming: doSometing, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() { // 이 함수는 Hello밖에 출력 못해서 쓸모 없음.
  console.log('Hello');
}
printHello();

function log(message) { // 그래서 매개변수를 이용해서 함수를 다양하게 사용.
  console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters
// premitive parameters: passed by value  (premitive데이터는 value가 저장되고)
// object parameters: passed by reference (object 데이터는 ref값 (참조값)이 저장됨)
function changeName(obj) {
  obj.name = 'coder';
}
const pyo = { name : 'pyo'};
changeName(pyo);
console.log(pyo);

// 3. Default parameters (added in ES6)
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage('Hi !');

//  4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  // 위와 같은 식
  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope 
// 한 문장만 기억하자. 밖에서는 안을 볼 수 없고, 안에서는 밖을 볼 수 있다.
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
  console.log(childMessage);
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit ****중요****

// 안좋은 예시
function upgradeUser(user) {
  if (user.point > 10) {
    // 블럭안에서 많이 작성하면 가독성이 떨어진다.
  }
}

// 바른 예시
function upgradeUser(user) {
  if (user.point <= 10) {
    return; // 조건이 안맞을 경우 빠르게 리턴을해서 함수를 종료한다.
  }
  // 조건이 맞을경우에만 실행하도록 if문 밖에서 다음구문 적기.
}

// First-class function
// functions are treated like any other variable
// can be assinged as a value to variavle  (변수할당 값으로써의 함수)
// can be passed as an argument to other functions.(매개변수로써의 함수)
// can be returned by another function (리턴값으로써의 함수)

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a. function expression is created when the execution reaches it
const print = function () {
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback funtion using function expression 
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log('yes!');
}

// named funciton
// better debugging in debugger;s stack traces
// recursions
const printNo = function print() {
  console.log('no!')
  print();
};
randomQuiz('wrong', printYes, printNo);

// Arrow function
//always anonymous
const simplePrint = function () {
  console.log('simplePrint');
};

const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;
const simplePrint = (a, b) => {
  // do something mre
  return a * b;
}

// IIFE: Immediately Invoked function Expression
(function hello() {
  console.log('IIFE');
}) ();
