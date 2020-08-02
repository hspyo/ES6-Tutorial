// HTTP(Hypertext Transfer Protocal)
// AJAX(Asynchronous JavaScript And XML)
// XML -> 불필요한 태그들이 많이들어가서 파일 사이즈가 커지고 가독성이 떨어짐
// 그래서 최근 많이 사용되는 것이 JSON(JavaScript Object Notation)
// 공부 방향 : Object ->(serialize) string  객체를 JSON을 이용해 어떻게 직렬화해서 string으로 변환할지
//            Object <-(deserialize) string 직렬화된 JSON을 어떻게 더사 object로 변환할건지.

// JSON
// JavaScript Object Notation

// Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  // symbol: Symbol("id"), // Symbol같은 자바스크립트에만 있는 데이터도 json에 포함안됨
  jump: () => { // 이 함수는 obj에 있는 데이터가 아니기 때문에 json에 포함되지 않음
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

// 원하는 데이터만 json으로 변환 시킬 수도 있다.
json = JSON.stringify(rabbit, ['name', 'color']); 
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key : ${key}, value : ${value}`);
  // return value;
  return key === 'name' ? 'ellie' : value; //name이 들어오면 ellie로 아니면 원래 value로
});
console.log(json);

// 2.JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); -> rabbit을 JSON으로 변환할때 obj는 제외됨 그래서 obj에 jump는 없음.

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate()); // obj의 birthDate는 스트링임
