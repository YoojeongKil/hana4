const before = () => console.log("before....");
const after = (r) => console.log("after...", r);

const someFn = (name, greeting) => console.log(`${greeting}, ${name}`);
const someFn2 = (id, nickname, email, level) =>
  console.log(`${id}/${nickname}/${email}/${level}`);

const template =
  (f) =>
  (...args) => {
    before();
    const ret = f(...args);
    after(ret);
    // setTimeout(() => after(ret));
    return ret;

    // return new Promise(resolve => {
    //   resolve(f(...args));
    //   after();
    // }).finally(after);
  };

const temp = template(someFn); // before → someFn → after 실행
const temp2 = template(someFn2); // before → someFn2 → after 실행
// await temp('sico', 'hello');
// // temp2(1, 'sico', 'sico@gmail.com', 5);
// console.log('square of 7 =', await template(n => n ** 2)(7));

temp("sico", "hello");
const x = template((n) => n ** 2)(7);
// (async function ff() {
//   await temp('sico', 'hello');
//   // temp2(1, 'sico', 'sico@gmail.com', 5);
//   console.log('square of 7 =', await x(7));
// })();
