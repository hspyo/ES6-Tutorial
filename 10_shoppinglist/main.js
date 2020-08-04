// JSON 파일로부터 items의 데이터들을 받아온다.
function loadItems() {
  return fetch('data/data.json')        // 파일로부터 데이터들을 받아옵니다.
    .then(response => response.json())  // 요청이 response되면 json으로 변환한다.
    .then(json => json.items);          //items를 리턴
}

// 전달받은 items들을 list에 업데이트한다.
function displayItem(items) {
  const container = document.querySelector('.items')
  container.innerHTML = items.map(item => createHTMLString(item)).join('');
} 
// map -> 한가지 배열 형태에서 다른형태의 배열로 만들 때 사용. 
// join -> 문자열들을 하나의 문자열로 병합할 때 사용
// innerHTML은 태그를 적용시켜 문자열을 html로 인식하여 return.

// 전달받은 item data로부터 HTML li를 만든다.
function createHTMLString(item) {            // item을 li 문자열로 리턴한다.
  return `
  <li class="item">
    <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
    <span class="item__description">${item.gender}, ${item.size}</span>
  </li>
  `;
}

// 버튼 클릭시 설정한 데이터와 부합하는 아이템들을 보여준다.
function onButtonClick(event, items) {    
  // on을 앞에 써주면 버튼이 클릭될 때 실행되는 함수구나 알 수 있음.
  // event.target.dataset.key  -> 클릭된 item의 key값에 접근
  // event.target.dataset.value  -> 클릭된 item의 value값에 접근
  // 즉, dataset을 이용하면 html에 있는 data-key와 data-value에 접근가능  
  const dataset = event.target.dataset; 
  const key = dataset.key;
  const value = dataset.value;

  if (key == null || value == null) { // key 또는 value가 null 일경우 함수 종료.
    return;
  }
  // filter : 배열에서 특정한 값을 다시 작은 배열로 만들 때 사용. (true/false)
  // Q. 그럼 map과 어떤 차이일까? filter는 true/false를 return하지만, map은 새로운 값을 return 할 수 있다.
  const filtered = items.filter(item => item[key] === value); // item[key]는 key의 value를 의미. (객체에서 key를 이용해 데이터에 접근하는 방법)
  displayItem(filtered);
}

// event설정
function setEventListeners(items) {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('#buttons');
  logo.addEventListener('click', () => displayItem(items));
  buttons.addEventListener('click', event => onButtonClick(event, items)); // event(click)와 items를 넘겨줌.
} 

// main (큰 전략짜고, 각각 함수를 만들어 나간다.)

loadItems()
  .then(items => { //loadItems함수가 성공적으로 실행되면 items를 받아오고
       displayItem(items);  //받아온 items들을 html에 보여줌
       setEventListeners(items)
  }) 
  .catch(console.log); //loaditems함수가 실패시