// 코드복사
const wm = new WeakMap();
const m = new Map();
let obj1 = { id: 1 };
let x = { id: 10 };
{
  const obj2 = { id: 2 };

  wm.set(obj1, 1);
  m.set(obj1, 1);
  console.log(wm, wm.has(obj1));
  console.log(m, m.has(obj1));

  wm.set(obj2, x);
  m.set(obj2, x);

  obj1 = null; // obj1 주소 변경!
  obj2.id = 3;
  x = { id: 100 };
  // x.id = 100;
  console.log(wm, wm.has(obj1), wm.has(obj2));
  console.log(m, m.has(obj1), m.has(obj2));
} // wm만 전역이라면 obj1, obj2는 GC!!
console.log(m.size, wm.size); // 2, undefined
console.log(wm, wm.has(obj1));
console.log(m, m.has(obj1));
console.log("m.keys>>", [...m.keys()]);
console.log("m.values>>", [...m.values()], obj1, x);

const oldObj1 = [...m.keys()][0];
console.log(">>>", oldObj1);
m.delete(oldObj1);
console.log("🚀  m:", m);
console.log(">>>", oldObj1);
