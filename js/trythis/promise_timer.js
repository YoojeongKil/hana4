const depthTimer = (depth) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`depth${depth}`, new Date().getSeconds());
      if (depth >= 3) reject(new Error("Already 3-depth!!"));
      resolve(depth + 1);
    }, depth * 1000);
  });

function promiseVersion() {
  depthTimer(1).then(depthTimer).then(depthTimer).catch(console.error);
}
// promiseVersion();

function org() {
  setTimeout(function () {
    console.log("depth1", new Date());
    setTimeout(function () {
      console.log("depth2", new Date());
      setTimeout(function () {
        console.log("depth3", new Date());
        throw new Error("Already 3-depth!!");
      }, 3000);
    }, 2000);
  }, 1000);
}

//-------------------------------------
const promiseFn = (id = 1) =>
  new Promise((resolve, reject) => {
    console.log("id>>", id);
    if (id < 7) resolve(id + 1);
    // if (ret instanceof Promise) return ret;
    // else reject(new Error("어디로?" + id));
  });

promiseFn()
  .then((res) => {
    console.log("res1>>", res);
    promiseFn(res); // Need Return the Promise Object!!
    return Promise.resolve(undefined);
  })
  .then((res) => {
    console.log("res2>>", res); // res가 undefined 이라면 ⇒ 여기서 throw 하면 될까?
    const error = new Error("XXXXX");
    // if (res === undefined) throw new Error("XXXXX");
    return Promise.reject(error);
  })
  .catch((err) => console.log("Error!!>>", err));
