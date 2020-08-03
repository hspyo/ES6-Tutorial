'use strick';

// JavaScript is synchronous.
// Excute the code block by order after hoisting
// hoisting: var, function declaration 

console.log('1');             // 1
setTimeout(() => console.log(`2`), 1000);       // 3  브라우저는 setTimeout을 기다리지 않고 바로 넘어감                       
                                                //    이것을 callBack함수라고함
console.log('3');             // 2  넘어와서 브라우저에게 요청을 하고 다시 setTimeout 함수 호출


// 그렇다면 callBack은 항상 비동기일 경우만 쓸까?  No
// 동기, 비동기 일때 모두 쓴다.

// Synchronous callback
// 프로그램이 실행되면 함수는 hoisting됨
function printImmediately(print){
  print();
}
printImmediately(() => console.log('hello'));  

// Asynchronous callback
// 프로그램이 실행되면 함수는 hoisting됨
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000)

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {  // 서버에서 데이터를 받아온다고 가정하고 일단 해보자
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin'});
      } else {
        onError(new Error('not access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);