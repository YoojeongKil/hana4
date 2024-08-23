// swap
let a = 1;
let b = 2;
let t = a;
a = b;
b = t;
console.log("🚀 old - a b:", a, b);
a = 1;
b = 2;
[b, a] = [a, b];
console.log("🚀 new - a b:", a, b);

console.log("---------------");
const arr = [1, 2]; //Array의 주소가 const, 주소는 바뀌지 X
[arr[0], arr[1]] = [arr[1], arr[0]];
console.log("🚀  arr:", arr);

function ex1() {
  function f1(user) {
    console.log(user.id, user.name);
  }
  function f2({ id, name }) {
    console.log(id, name);
  }
  const f3 = ({ id, name }) => console.log(id, name);

  const hong = { id: 1, name: "Hong" };
  const lee = { id: 2, name: "Lee" };

  f1(hong);
  f2(lee);
  f3(hong);
}

function ex2() {
  const user = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };
  // 정답1
  //   const { passwd, ...userInfo } = user;
  //   console.log(userInfo); // 출력결과: {id: 1, name: 'Hong', addr: 'Seoul'}

  // 정답2
  const userInfo = { ...user };
  delete userInfo.passwd;
  console.log(userInfo);
}

// ex2();

function ex3() {
  const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
  //   cf. const id1 = arr[0][0].id;  // Bad
  const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;
  console.log(id1, id2, id3); // 출력결과: 1 2 3
}

// ex3();

function symbolProperty() {
  const obj = { [Symbol()]: 123 };
  console.log(obj, Reflect.ownKeys(obj));
  const [kk] = Reflect.ownKeys(obj);
  console.log("🚀  kk:", obj[kk]);
}

function ex4() {
  const user = { name: "Hong", passwd: "xyz", addr: "Seoul" };
  function getValueExceptInitial(k) {
    const { [k]: val } = user;
    //   const [, ...rest] = [...val];
    if (typeof val !== "string") return;
    const [, ...rest] = val; // string is iterator
    return rest.join(""); // array 원소 연결
  }

  console.log(getValueExceptInitial("name")); // 'ong'
  console.log(getValueExceptInitial("passwd")); // 'yz'
  console.log(getValueExceptInitial("addr")); // 'eoul'
  console.log(getValueExceptInitial("id")); // error with number type
}

// ex4();

function ex5() {
  const user = { id: 1, name: "Hong", passwd: "xyz", addr: "Seoul" };

  user.f = function () {
    console.log("ffff", this.name);
  };
  console.log("🚀  user:", user);

  user.f();
  const { f: xf } = user;
  xf();

  function getDiffMillis(dt1, dt2) {
    const d1 = new Date(dt1);
    const d2 = new Date(dt2);

    const { getTime: getTime1 } = d1;
    const { getTime: getTime2 } = d2;
    return getTime1.bind(d1)() - getTime2.bind(d2)();
  }
  console.log(getDiffMillis("2021-01-01", "2021-01-02"));
}

ex5();
