// Objects
//  one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value }; 오브젝트는 키와 벨류의 집합체!!

// 1. Literals and properties
// ex 1
const name = 'pyo';
const age = 4;
print(name, age);
function print(name, age) {
  console.log(name);
  console.log(age);
}

// ex 1은 로직컬하지 않기 때문에 객체를 써준다.

// ex 2 객체를 이용해 로지컬하게 코드를 작성.
function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const pyo = { name: 'pyo', age: 4 };
print(pyo);

// Obj 만드는 방법
const obj1 = {};  // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax 
                            // new를 생성하면 Object에서 정의된 객체구조가 호출됨.

// JavaScript는 Runtime때 동적으로 타입이 정해짐
// 그래서 아래처럼 뒤늦게 property를 생성할 수 있음.
// 하지만 이렇게 동적으로 코딩하는 건 유지보수하기 힘들다. 가능한한 피하자.
pyo.hasJob = true; 

// 심지어 삭제도 가능함 
delete pyo.hasJob;


// Computed properties

console.log(pyo.name);    // '.' 으로 객체에 접근 가능
console.log(pyo['name']); // Key should be always String 
pyo['hasJob'] = true;

function printValue(obj, key) {
  // console.log(obj. key)  obj에는 key라는 property가 없기 때문에 undefined
  console.log(obj [key]); // 이때 Computed property 방법을 써주면 된다.
}
printValue(pyo, 'name');
printValue(pyo, 'age');

// 3. Property value shorthand

const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
// 이렇게 객체들의 중복작성을 피하기 위해서
// 아래 함수를 작성.
function makePerson(name, age) { // makePerson은 class 즉, 템플릿 역할
  return {                              // 이전 자바스크립트에 클래스가 없었을 때 사용법.
    name,
    age,
  };
}

// 4. Constructor Function
const person4 = new Person('pyo', 30);  
function Person(name, age) {
  // this = {};  this에다가 obj를 넣음 (생략된 부분)
  this.name = name;
  this.age = age;
  // return this; this를 return (생략된 부분)
}

// 5. in operator: property existence check (key in obj) 
console.log('name' in pyo);  // t
console.log('age' in pyo);    // t
console.log('random' in pyo); // f

// 만약 존재하지 않는 값을 출력한다면?
console.log(pyo.random); // undefined

// 6. for..in vs for.. of
// for (key in obj)
console.clear();
for (key in pyo) { // pyo객체를 반복적으로 돌면서 key값을 지역변수로 할당.
  console.log(key);
}

// for (value of i)
const array = [1, 2, 4, 5];
for (value of array) { // array 배열을 순차적으로 출력.
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'pyo', age: '20' };  // user -->(ref)메모리 --> name : pyo age : 20
const user2 = user;                       // user는 메모리에있는 ref를 참조하고 있고 참조값에는 name, age가 들어있다.
user2.name = 'coder';                     // user2도 user와 같은 ref를 참조하고 있음.
console.log(user);   // user name은 coder (user,user2 둘다 같은 ref를 참조하기 때문에.)

// old way 1
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// old way 2
const user4 = Object.assign({}, user); //assign (target, resource)
console.log(user4);

const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };  
const mixed = Object.assign({}, fruit1, fruit2); // f2 는 f1을 덮어 씌움
console.log(mixed.color);
console.log(mixed.size);