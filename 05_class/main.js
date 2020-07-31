'use strict'
// 객체지향 프로그래밍
// class : template
// object : instance of a class
// Javascript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // get를 생성하는 순간 위 this.age는 메모리에 있는 age가 아니라
  // get에 있는 age를 읽어온다.
  get age() {
    return this._age;
  }
  // 마찬가지로 위에 age; 값을 세팅할 때 setter에 value로 값을 전달함.
  // 그리고 전달된 value를 다시 this.age에 할당할 때 또 setter를 호출한다.
  // 그래서 변수명을 _age로 약간 다르게 해줘야함.
  set age(value) {
    // if (value < 0) {
    //      throw Error(`age can not be negative`);
    // }
    this._age = value < 0 ? 0 : value;
    }
  }

  const user1 = new User('Steve', 'Job', -1);
  console.log(user1.age);

  // 3. Fields (public, private)

  class Experiment {
    publicField = 2;
    #privateField = 0; //private은 클래스 내부에서만 접근가능
  }
  const experiment = new Experiment();
  console.log(experiment.publicField);
  console.log(experiment.privateField); // undefined private변수는 접근 불가.

  // 4. Static properties and methods
  // static은 언제 쓰면 좋을까? -> object 상관없이 즉 들어오는 데이터 상관없이
  //  공통적으로 class에서 쓸 수 있을 때 static메소드를 사용하는 게 메모리의 효율을 높여줌
  class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
      this.articleNumber = articleNumber;
    }

    static printPublisher() {
      console.log(Article.publisher);
    }
  }

  const article1 = new Article(1);
  const article2 = new Article(2);
  console.log(Article.publisher);
  Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return width * this.height;
  }

  toString() {
    return `Triangle: color: $(this.color)`;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  // 필요한 부분을 새로 정의해주는 것 -> overriding
  draw() {
    super.draw(); // Shape의 console부분 불러오기
    console.log('🔺');
  }
  getArea() {
    return width * this.height /2; // 삼각형은 /2를 해줘야 넓이가 나오니까 재정의
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf 
console.log(rectangle instanceof Rectangle); // t rectangle은 Rectangle의 인스턴스인가?
console.log(triangle instanceof Rectangle); // f
console.log(triangle instanceof Triangle); // t
console.log(triangle instanceof Shape); // t
console.log(triangle instanceof Object); // t 자바스크립트의 모든 객체는 Object객체에 상속되어있다. 
