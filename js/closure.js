function counterx() {
  let count = 0;
  return function X() {
    count += 1;
    return count;
  };
}
const counter1 = counterx();
console.log("🚀  counter1:", counter1, counter1.count);
const counter2 = counterx();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1

const obj = { id: 1 };
console.log("🚀  obj:", obj, obj.id, obj.xxx);

console.log("-------------------------");
function discount() {
  const dcRate = 0.1;
  return function (price) {
    return price * dcRate;
  };
}

const items = [
  { item: "상품 A", price: 32000 },
  { item: "상품 B", price: 45000 },
];
const dc = discount();
for (const { item, price: orgPrice } of items) {
  const salePrice = orgPrice - dc(orgPrice);
  console.log(`${item}: ${orgPrice}원 --> ${salePrice.toLocaleString()}원`);
}

console.log("-------------------------");

function currentCount() {
  let currCount = 0; // private variable
  return {
    connect() {
      currCount += 1;
    },
    disconnect() {
      currCount -= 1;
    },
    getCount() {
      return currCount;
    }, // getter method
    get count() {
      return currCount;
    }, // readonly getter (accessor)
  };
}

const actions = ["입장", "입장", "입장", "퇴장", "입장", "퇴장"]; // Status Queue

const counter = currentCount();
for (const action of actions) {
  action === "입장" ? counter.connect() : counter.disconnect();
  console.log(`${action} -> 현재 입장객:  ${counter.count} 명`);
}
console.log("Current User Count=", counter.count); // counter.getCount()

console.log("-------------------------");
let sum = 0;
for (let i = 1; i <= 100; i += 1) {
  sum += i;
}
console.log("🚀  sum:", sum);

function addTo100(a = 1) {
  if (a === 100) return a;
  return a + addTo100(a + 1);
}
console.log("🚀  addTo100:", addTo100(1));

function addTo100TCO(a, sum = 0) {
  if (a === 100) return sum + 100;
  return addTo100TCO(a + 1, sum + a);
}
console.log("🚀  addTo100TCO:", addTo100TCO(1));

console.log("-------------------------");

console.log("🚀  makeArray:", makeArray(10));

function makeArray(n) {
  if (n === 1) return [1];
  return [...makeArray(n - 1), n];
}

function makeReverseArray(n) {
  if (n === 1) return [1];
  return [n, ...makeReverseArray(n - 1)];
}
console.log("🚀  makeReverseArray:", makeReverseArray(5));

// n  i-acc    o-acc
// 5  []       [5, ...acc]
// 4  [5]      [4, ...acc]  ==> [4,5]
// 3  [4,5]    [3,4,5]
// 2  [3,4,5]  [2,3,4,5]
// 1  [2,3,4,5]
function makeArrayTCO1(n, acc = []) {
  if (n === 1) return [1, ...acc];
  return makeArrayTCO1(n - 1, [n, ...acc]);
}
console.log("🚀  makeArrayTCO1:", makeArrayTCO1(5));

function makeArrayTCO2(n, acc = []) {
  const t = [n, ...acc];
  if (n === 1) return t;
  return makeArrayTCO2(n - 1, t);
}
console.log("🚀  makeArrayTCO2:", makeArrayTCO2(5));
