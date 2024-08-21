var x = 1;
console.log("Hello, World!");

let a = 1;
let b = 2;

let c = (a++, b++);
let d = (a--, b + a);
console.log("🚀 a, b, c, d:", a, b, c, d);

d = void (c = a + b);
console.log("🚀 d:", d);

function f() {
  console.log("xxxxxx");
  return undefined;
}
x = f();
console.log("🚀 x:", x);

const s = `${++a}::${b}`; // {a} + '::' + {b}
console.log("🚀 s:", s);

const first = "",
  last = "Bob";
console.log(`${first}${first ? " " : ""}${last}`);
console.log(`${first}${first && " "}${last}`); // Bad(' Bob')

console.log("---------------");
let aa = 0b1010;
let bb = 0b1100;
const and = aa & bb;
console.log("🚀 and:", and.toString(2));

const or = aa | bb;
console.log("🚀 or:", or.toString(2));

const xor = aa ^ bb; //다르면 참
console.log("🚀 xor:", xor.toString(2));

const notA = (~aa).toString(2);
const notB = (~bb).toString(2);
console.log("🚀 notA, notB:", notA, notB);

console.log(aa >> 1, aa >>> 1, aa << 1);
console.log(bb >> 1, bb >>> 1, bb << 1);

console.log("============");
const R = 1;
const W = 2;
const E = 4; // 0b001, 0b010, 0b100

let auth = parseInt("011", 2);
console.log("🚀 auth:", auth);
console.log("auth-bin>>", `0b0${auth.toString(2)}`);

const hasWriteAuth = !!(auth & W);
console.log("🚀 hasWriteAuth:", hasWriteAuth);
const hasExeAuth = !!(auth & E);
console.log("🚀 hasExeAuth:", hasExeAuth);
const hasReadAndExeAuth = !!(auth & (R | E));
console.log("🚀 hasReadAndExeAuth:", hasReadAndExeAuth);
auth = auth ^ E; // XOR
console.log("🚀 auth:", auth);

arr = [1, 2, 3];
