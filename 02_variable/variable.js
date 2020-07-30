'use strict';

// * Variable

// 1. let

let globalName = 'global name'; // 전역변수 (global scope) 어디서나 할 수 있음. 하지만 메모리를 많이 차지하기 때문에 신중히 쓰는 게 좋다.
{
let name = "pyo";               // 지역변수  (block scope) {}안에서만 사용 가능
console.log(name);
name = 'hello';
console.log(name);
}
/*
  * 이전의 쓰던 함수 'var'
    -> var has no block scope, 즉 {} 영향을 안받음.
       var는 유연하지만 프로젝트가 커지면 문제가 많이 발생한다.
    -> var hoisting : 선언을 맨위로 올려줌.
        (hoisting : 끌어올려주다)
*/
{ // var hoisting
  age = 4;
  var age;   // 실행하면 var age를 위로 올려줌.
}
console.log(age); // 그래서 {}의 영향을 안받고 정상 출려됨 

// 결론은 let을 쓰자.



/* 
  2. Contants

    immutable data type
    - security   --> 해커들이 값을 바꿀 수 없음.
    - thread safety --> 어플리케이션이 실행되면 프로세스가 할당이 되는데,
                        그 프로세스 안에는 여러가지의 thread가 동시에 
                        실행되면서, 어플리케이션을 효율적이고 빠르게 동작시킨다.
                        여러 thread들이 동시에 변수에 접근해서 data를 바꿀 수 있는데
                        const를 쓰면 이것이 불가능.
    - reduce human mistakes --> 다른 개발자가 코드 바꿀 때 실수를 방지할 수 있음.

    결론은 가능하면 const를 쓰자.
*/ 

/*
  3. Variable types

    1) primitive: 더 이상 나누어질 수 없는 single item
    ex. number, String, boolean, null, undefined, symbol
    2) object: single item들을 묶어서 box container로 관리
    3) function, first-class function
    first-class function이란 함수를 
    변수에할당, 인자전달, 리턴타입으로 사용할 수 있는 것.
 */

 // number 
 const infinity = 1 / 0;
 const negativeInfinity = -1 / 0;
 const nAn = 'not a number' / 2;
 console.log(infinity);
 console.log(negativeInfinity);
 console.log(nAn);

 // 연산은 항상 값이 valid한지 체크하고 넘어가야한다. 

 // String
 const char = 'c';
 const pyo = 'pyo';
 const greeting = 'hello' + pyo;
 console.log(`value: ${greeting}, type: ${typeof greeting}`);
 const helloPyo = `hi ${pyo}!`;
 console.log(`value: ${helloPyo}, type: ${typeof helloPyo}`);
 // 위 코드 원래 식 -> console.log('value: ' + {helloBob} + ' type: ' + typeof helloBob);

 // boolean
 // false : 0, null, undefined, NaN, ''
 // true : any other value

 const canRead = true;
 const test = 3 < 1; // false
 console.log(`value: ${canRead}, type: ${typeof canRead}`);
 console.log(`value: ${test}, type: ${typeof test}`);
 
 // null
 let nothing = null;
 console.log(`value: ${nothing}, type: ${typeof nothing}`);

 // undefined
 let a; // let a = undefined;
 console.log(`value: ${a}, type: ${typeof a} `);

 // symbol 
 const symbol1 = Symbol('id');
 const symbol2 = Symbol('id');
 console.log(symbol1 === symbol2); //false  symbol은 String에 상관없이 고유한 식별자를 만들 때 사용
 const symbol3 = Symbol.for('id');
 const symbol4 = Symbol.for('id'); 
 console.log(symbol1 === symbol2); //true   for를 이용해 특정 String을 위한 symbol을 만들어준다.
 console.log(`value: ${symbol1.description}, type ${symbol1}`) //description을 입력해야 오류가 안뜬다.

 // Dynamic typing: dynamically typed language
 // -> 변수를 선언할 때 타입을 선언하지않고 런타임때 할당된 값에 따라 타입이 변경될 수 있음
const ellie = { name: 'ellie', age: 20 }; // 객체 ellie는 값변경 불가
ellie.age = 21;                           // 객체 값 name, age는 변경 가능
 let text = 'hello';
 console.log(text.charAt(0)); // h
 console.log(`value ${text}, type: ${typeof text}`);
 text = 1;
 console.log(`value ${text}, type: ${typeof text}`);
 text = '7' + 5 // 75 (string)
 console.log(`value ${text}, type: ${typeof text}`);
 text = '8' / '2' // 4 (number)
 console.log(`value ${text}, type: ${typeof text}`);
 console.log(text.charAt(0)); // error why? 현재 text는 4 (number) 이기 때문

 