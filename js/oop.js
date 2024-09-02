const obj = { id: 1, name: "Hong" };
// cf. obj = {..., __proto__: { x: 11 }};

console.log("obj.toString>>", obj.toString);
// console.log(
//   (Object.getPrototypeOf(obj) === Object.prototype) ===
//     obj.constructor.prototype) ===
//     obj.__proto__
// );

class Animal {
  static ID = 1;
  static isDog(ani) {
    return ani.name === "Dog";
  }

  constructor(name) {
    this.name = name || super.constructor.name;
  }
}
console.log("obj.keys=", Object.keys(obj));
const dog = new Animal("Dog");
console.log("ak=", Object.keys(dog));
for (let k in dog) console.log("k=", k);
console.log("oh=", obj.hasOwnProperty("id"));
console.log("dh=", dog.hasOwnProperty("id"));
console.log("dh=", dog.hasOwnProperty("name"));

console.log("static>>", Animal.ID);
console.log("static>>", dog.ID);

class Cat extends Animal {
  static IDD = 2;
  kukuki() {
    console.log("Kookkkkkk");
  }
}
const cat = new Cat();
console.log("staticCatIDD>>", Cat.IDD);
Animal.ID = 5;
console.log("staticCatID>>", Cat.ID);

console.log("---------------");
const hong = { id: 1, name: "Hong" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };
const users = [hong, lee, kim];
const ids = users.map((user) => user.id);
console.log("🚀  ids:", ids);
Array.prototype.mapBy = function (prop) {
  return this.map((a) => a[prop]);
};
const mapIds = users.mapBy("id");
console.log("🚀  mapIds:", mapIds);
return;

console.log("---------------");
class Emp {
  firstName;
  lastName;
  // set fullName(name) {
  //   [this.firstName, this.lastName] = name.split(' ');
  // }
  // get fullName() {
  //   // accessor
  //   return `${this.firstName} ${this.lastName}`;
  // }
}
// const hong = new Emp();
// hong.fullName = 'Kildong Hong';
// console.log(hong.fullName); // ?
// console.log(hong.firstName); // ?
// console.log(Object.getOwnPropertyDescriptor(Emp.prototype, 'fullName'));
// return;

// // hong.firstName
// const proxyObj = new Proxy(hong, {
//   get(target, prop, receiver) {
//     // receiver: this binding object
//     console.log('proxy.get>>', target, prop);
//     if (prop === 'fullName') {
//       return `${target.firstName} ${target.lastName}`;
//     } else {
//       return target[prop]?.toUpperCase();
//     } // return Reflect.get(target, prop, receiver);
//   },

//   set(target, prop, value, receiver) {
//     console.log('proxy.set>>', target, prop, value);
//     if (prop === 'fullName') {
//       const [f, l] = value.split(' ');
//       target.firstName = f;
//       target.lastName = l;
//     } else {
//       target[prop] = value;
//     } // target[prop]이 함수라면??
//     // return Reflect.set(target, prop, value, receiver);
//     // return target;
//   },
// });

// proxyObj.fullName = 'Nanda Kim';
// console.log('proxy>>', proxyObj.fullName);
// console.log('proxy>>', proxyObj);
// console.log('instance>>', proxyObj instanceof Emp);
