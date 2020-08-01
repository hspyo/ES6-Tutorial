// 10가지 유용한 배열 함수들

// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  
  for(let i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
  }

  // solution
  const result = fruits.join(', ');
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';

  for(let i=0; i<fruits.length; i++) {
    const fruitsArr = [];
    console.log(fruitsArr[i] = fruits[i]);
  }

  // solution
  const result = fruits.split(', '); //split은 구분자('')필수
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse());
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  // array.shift();
  // array.shift();
  console.log(array);

  // solution
  // array.splice(0, 2); // 사용불가 why? new array를 만들어야하니까

  const result = array.slice(2, 5);
  console.log(result);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  //solution
  const result = students.find((student) =>  student.score === 90);
    console.log(result);
}

// Q6. make an array of enrolled students
{
  // for(let i=0; i<students.length; i++) {
  //   if(2 % i === 0) {

  //     const arr = students[i].enrolled;
  //     console.log(students[i].enrolled);
  //   }
  // }

  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
      console.log(result);

      // 배열안에 있는 요소들을 함수를 이용해 새로운 데이터를 만들고 싶을 때
      // map을 사용한다.
    
}

// Q8. check if there is a student with the score lower than 50
{
  console.clear();
  const result = students.some((student) => student.score < 50); // 50아래 학생이 있는지 없는지 return값 확인해줌
  console.log(result); // some은 배열 중에 특정 값이 조건에 만족하는지 확인

  const result2 = !students.every((student) => student.score >= 50); //모든학생이 50이상인게 true인게 아니라면
  console.log(result2); //every는 모든 배열들이 조건을 만족하는지 확인
}

// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0); // 0은 초기 value 값
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score).join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
  .map((student) => student.score)
  .sort((a, b) => a - b)
  .join();
  console.log(result);
}