const user = {
  "": 1,
  " ": 1,
  [123]: 1,
  [12345n]: 2,
  true: 1,
  id: 2,
  [`name`]: "Hong",
  [Symbol()]: "HongKilDong",
  [Symbol()]: "HongKilDong222",
  [`${new Date()}`]: 365,
  "my-friends": ["Han", "Kim"],
  getInfo: () => `${this.id}-${this.name}`,
  getInfo() {
    return `${this.id}-${this.name}`;
  },
};
console.log("🚀  user:", user);
console.log(">>", user["123"]);
console.log(">>", user[12345n]);

// const keys = Object.keys(user);
const keys = Reflect.ownKeys(user);
console.log("🚀  keys:", keys);
console.log("🚀  sym:", user[keys[keys.length - 1]]);

let symbolKey;
for (let i = 0; i < keys.length; i++) {
  const typ = typeof keys[i];
  console.log(keys[i], "==>", typ);
  if (typ === "symbol") {
    symbolKey = keys[i];
  }
}
console.log("Symbol>>>", user[symbolKey]);

console.log("****>>", user.getInfo());

user.addr = "Seoul";
console.log("🚀  user:", user);

// delete user.addr;
console.log(
  "addr" in user,
  user.hasOwnProperty("addr"),
  Reflect.has(user, "addr")
); // true true

console.log("user.getOwnPropSym>", Object.getOwnPropertySymbols(user));

const values = Object.values(user);
console.log("🚀  values:", values);
const entries = Object.entries(user);
console.log("🚀  entries:", entries);

console.log("===================");

/**
 * symbol keys들을 포함한 객체의 entries를 구하는 함수!
 * @param obj ....
 * @returns
 */
function entriesWithSymbol(obj) {
  if (!obj || typeof obj !== "object") return [];

  const entriesExceptSymbols = Object.entries(obj);
  const onlySymbolKeys = Object.getOwnPropertySymbols(obj);
  for (const sym of onlySymbolKeys) {
    entriesExceptSymbols.push([sym, obj[sym]]);
  }

  return entriesExceptSymbols;
}
console.log("🚀  entriesWithSymbol:", entriesWithSymbol(user));

console.log(Object.getOwnPropertyDescriptor(user, "id"));
console.log(Object.getOwnPropertyDescriptors(user));
console.log("--------------------------");
Object.defineProperty(user, "age", {
  value: 39,
  writable: false,
  enumerable: true,
  configurable: false,
});
// Object.defineProperty(user, 'age', { writable: true });
console.log(Object.getOwnPropertyDescriptor(user, "age"));
user.age = 33;
console.log("🚀  user.age:", user.age);
console.log("🚀  keys:", Object.keys(user));
console.log("-------------------");
const xobj = Object.assign({ x: 100 }, user);
console.log("🚀  xobj:", xobj);

const cobj = Object.create(user);
console.log("🚀  cobj:", cobj, cobj.__proto__);
console.log("****>>", Object.getPrototypeOf(cobj));
