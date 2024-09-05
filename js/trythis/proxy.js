import assert from "assert";
class Emp {
  firstName;
  lastName;
  constructor() {
    // hong: instanceof Proxy, 생성 당시의 this: instanceof Emp
    return new Proxy(this, {
      set(target, prop, value) {
        if (prop === "fullName") {
          const tmp = value?.split(" ") || [];
          target["lastName"] = (tmp[1] || tmp[0])?.toUpperCase();
          target["firstName"] = tmp[1] ? tmp[0] : target.firstName;
        } else {
          target[prop] = value;
        }
      },

      get(target, prop) {
        if (prop === "fullName") {
          const { firstName, lastName } = target;
          return `${firstName}${firstName ? " " : ""}${lastName}`;
        }

        return target[prop];
      },
    });
  }
}
const hong = new Emp();
hong.fullName = "Kildong Hong"; // split하여 firstName, lastName 셋
const kim = new Emp();
kim.fullName = "Kildong Kim"; // split하여 firstName, lastName 셋
assert.strictEqual(hong.fullName, "Kildong HONG");
hong.fullName = "Lee";
console.log(hong.firstName, hong.lastName); // 'Kildong LEE' 출력하면 통과!
assert.strictEqual(hong.fullName, "Kildong LEE");
assert.deepStrictEqual(
  [hong.firstName, hong.lastName],
  "Kildong LEE".split(" ")
);

hong.fullName = undefined;
console.log("🚀  hong:", hong);
