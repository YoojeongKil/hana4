function f() {
  console.log("f>>", this.name);
}

f();
f.bind({ name: "Binding" })();
f();
// f.call({ name: "Binding" });

const boundF = f.bind({ name: "BoundF" });
console.log(boundF === f);
boundF();

const f2 = f;
console.log(f2 === f);
f2();

globalThis.id = 100;
this.id = 900;
console.log("🚀  this:", this);

const obj = {
  id: 1,
  f1: function () {
    console.log("f1>>", this.id);
  },
  f2: () => console.log("f2>>", this.id),
};

(function () {
  console.log(this); //global object
})();

obj.f1(); //f1.bind(obj)();  메소드로써의 호출
obj.f2(); //f2();

const of1 = obj.f1;
const of2 = obj.f2;
console.log(of1 === obj.f1);
console.log(of2 === obj.f2);

of1(); // just function-object
of2();
