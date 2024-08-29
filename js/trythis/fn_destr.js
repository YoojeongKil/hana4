function getDiffMillis(dt1, dt2) {
  const d1 = new Date(dt1);
  const d2 = new Date(dt2);

  const { getTime: getTime1 } = d1;
  const { getTime: getTime2 } = d2;

  // return Math.abs(getTime1.bind(d1)() - getTime2.apply(d2));
  return Math.abs(getTime1.call(d1) - getTime2.apply(d2));
}

// Date.prototype.getTime = function () {
//   return this.getMilliseconds();
// };

console.log(getDiffMillis("2021-01-01", "2021-01-02"));

class Dog {
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log("this>>>", this);
    return this.name;
  }

  fn() {
    return "FN";
  }

  static sfn() {
    return "SFN";
  }
}
const lucy = new Dog("Lucy");
console.log("🚀  lucy:", lucy);
const { sfn } = Dog;
// console.log('🚀  sfn:', sfn());

const { name: aa, fn: fnnn, getName } = lucy;

console.log(aa, sfn(), fnnn(), getName); // ?
getName.call(lucy); // ?
lucy.getName();

const obj = {
  name: "Obj",
  getName() {
    console.log("this>>>", this);
    return this.name;
  },
};
const getNameObj = obj.getName;
console.log(getNameObj());
