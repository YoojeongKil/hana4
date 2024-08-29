const dog = {
  name: "Maxx",
  showMyName() {
    console.log(`My name is ${this.name}.`);
  },
  whatsYourName() {
    // 방법1)
    // var self = this;
    // setTimeout(function () {
    //   self.showMyName();
    // }, 1000);
    // var self = this;
    // setTimeout(() => self.showMyName(), 1000);
    // 방법2)
    // setTimeout(() => this.showMyName(), 1000);
    // 방법3)
    // setTimeout(this.showMyName.bind(this), 1000);
  },
};

dog.whatsYourName();

globalThis.id = "Golbal_ID";
this.id = "Module_ID";

const obj = {
  id: 123,
  f: function () {
    console.log("obj > f =", this.id);
  },
  af: () => console.log("obj > af =", this.id),
  subObj: {
    id: 999,
    f: function () {
      console.log("obj > subObj > f =", this.id);
    },
    af: () => console.log("obj > subObj > af =", this.id),
  },
};

// obj.f();
// obj.af();
// console.log("------------");
// obj.subObj.f();
// obj.subObj.af();

var i;
for (i = 0; i < 5; i += 1) {
  // setTimeout(() => console.log(i), 100); // (다)
  setTimeout(console.log, 100, i); // (나)
}
for (let i = 0; i < 5; i += 1) {
  setTimeout(() => console.log(i), 100); // (다)
  // setTimeout(console.log, 100, i); // (나)
  // ⇐⇒ setTimeout((i) => console.log(i), 100);
}
