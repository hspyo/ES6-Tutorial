'use strict';

// Promise is a JavaScript object for asynchronous operation.
// 염두할 2가지.
// 1. state 프로그램 수행하고 있는지 또는 실행이 완료되고 실패했는지 성공했는지
// state: pending -> fulfilled or rejected
// 2. 데이터를 제공하는 Producer와 Consumer를 알기


// 1. Producer
// *명심!* When new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log('doing something....');
  setTimeout(() => {
    // resolve('ellie');
    reject(new Error('no network'));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
    .then(value => {
      console.log(value);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      console.log('finally');
    });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
}) 
fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
      });
    })
    .then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve('🐓'))
    })
const getEgg = hen =>
    new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });
const cook = egg => 
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

getHen() //
    .then(getEgg)
    .catch(error => { // getEgg에서 error가 났을 때 대신 피자를 리턴해줌.
      return `🍕`;
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);
