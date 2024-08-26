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
