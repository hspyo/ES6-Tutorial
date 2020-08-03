// async & await
// clear style of using promise

// 1. async 
async function fetchUser() {
  // do network request in 10 secs....
  return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}

async function pickFruits() { 
    const applePromise = getApple(); // 사과와 바나나는 데이터를 받아오는데
    const bananaPromise = getBanana(); // 서로 연관이 없기 때문에 동시에 
    const apple = await applePromise; // 받아오도록 promise를 이용한다.
    const banana = await bananaPromise; // 하지만 이런식으로 코드를 쓰진 않음.
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

// 3. useful APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(fruits =>
    fruits.join(' + ')
    );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);