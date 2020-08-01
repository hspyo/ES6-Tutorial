/*
  자료구조란? 
  - 비슷한 종류의 데이터타입을 묶어 놓는것.
    ex) 동물 - 토끼1 토끼2 토끼3
        채소 - 당근1 당근2 당근3
        
  * 다른 언어는 보통 위처럼 동일한 타입의 자료구조만 묶을 수 있다.
    하지만 JS는 동적인 언어기 때문에 (Dynamically typed language)
    즉, 한바구니 안에 여러 타입들을 담을 수 있다. 하지만 피해야함.

  - 어떤 방식으로, 어떤 형식으로 담느냐에 따라 다양한 자료구조가 있음.

  동물- Class
  토끼, 당근 - Objects : (서로 연관된 특징(property)과 
                         행동(method)들을 모아둔 것을 object라고함)
  -> obj는 property와 method들을 가지고 있다.
  
  ex)
  Objects - property / method

  토끼- 귀 2개 (property)
      - 먹는다 (method)
      - 뛴다 (method)
  
  당근 - 주황색 (property)
       - 비타민c (property)
 
*/

'use strict';

// Array

// 1. Declaration

const arr1 = new Array();
const arr2 = [1, 2];

// Index position
const fruits = ['🍔', '🍕'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits

// a. for
for(let i=0; i<fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits) {
  console.log(fruit);
}

// c. forEach API -> 콜백함수를 받아옴 (젤 간단) 
console.log("===forEach===");
fruits.forEach((fruit) => console.log(fruit)); 
// forEach는 배열안에 있는 value들 마다 내가 전달한 함수를 출력함

// 4.Addtion deletion, copy

// push: add an item to the end
fruits.push('🍳', '🥩');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
// const poped = fruits.pop(); pop은 값을 return하기 때문에 값을 받을 수 있음.
console.log(fruits);

// unshift: add an item to the beningging
fruits.unshift('🍭', '🍵');
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// pop은 값을 뒤에서 빼주면 되는데 shift는 앞에서 값을 빼고 
// 뒤에 것들을 앞으로 당겨와야해서 작업이 여러번 일어남.
// push랑 unshift도 동일한 원리.
// 결론은 되도록 pop,push를 사용할 것.


// splice: remove an item by index position
fruits.push('🍘','🍙','🍚');
console.log(fruits);
fruits.splice(1, 1); // splice(start, deleteCount)
console.log(fruits);
fruits.splice(1, 1, '🧀', '🍗') // 1번 인덱스부터 1개 지우고 그자리에 '🧀', '🍗'값을 넣기
console.log(fruits);

// combine two arrays
const fruits2 = ['🥨', '🥓'];
const newFruits = fruits.concat(fruits2)
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🧀'));
console.log(fruits.indexOf('🍗'));

// includes or not
console.log(fruits.includes('🍙'));
console.log(fruits.includes('🍼'));

// lastIndexOf
// console.clear();
fruits.push('🧀');
console.log(fruits);
// 만약 같은 게 2개 있다면?
console.log(fruits.indexOf('🧀')); // 앞에서 처음 발견되는 인덱스 출력
console.log(fruits.lastIndexOf('🧀')); // 뒤에 가장 마지막 인데스 출력