import assert from "assert";

const randTime = (val) =>
  new Promise((resolve) => {
    const rtime = Math.random() * 1000;
    console.log("start>>", val, Math.trunc(rtime));
    setTimeout(() => {
      console.log("run>>", val);
      resolve(val);
    }, rtime);
  });

const promiseAll = (promises) =>
  new Promise((resolve, reject) => {
    if (!promises?.length) reject(new Error("Promise를 전달하세요!"));

    const results = [];
    let cntToRun = promises.length;
    for (let i = 0; i < promises.length; i += 1) {
      const promise = promises[i];
      // Promise.resolve(promise)
      (promise instanceof Promise ? promise : Promise.resolve(promise))
        .then((succ) => {
          results[i] = succ;
          // results.push(succ); // BAD
          if ((cntToRun -= 1) === 0) resolve(results);
        })
        .catch(reject);
    }
  });

const promiseAllAsync = async (promises) => {
  const results = [];
  let idx = 0;
  for (const promise of promises) {
    promise.catch((err) => err);
    // promise.catch(err => {
    //   console.error('EEEEE>>>', err);
    // });
  }

  for (const promise of promises) {
    // results[idx++] = await promise;
    results[idx++] = await promise;
    // results[promises.indexOf(promise)] = await promise;
  }
  // for await (const promise of promises) {
  //   results[idx++] = promise;
  // }

  return results;
};

console.time("PALL");
const arr = await promiseAllAsync([randTime(1), randTime(2), randTime(3)]);
console.table(arr);
console.timeEnd("PALL");
assert.deepStrictEqual(arr, [1, 2, 3]);

try {
  const array = await promiseAllAsync([
    randTime(11),
    Promise.reject("RRR"),
    randTime(33),
  ]);

  console.table(array);
  console.log(JSON.stringify(array, null, "  "));
  console.log("여긴 과연 호출될까?!");
} catch (error) {
  console.log("reject!!!!!!>>", error);
}

// original version
// promiseAll([randTime(1), randTime(2), randTime(3)])
//   .then(arr => {
//     console.table(arr);
//     console.timeEnd('PALL');
//     // assert.deepStrictEqual(arr, vals);
//   })
//   .catch(console.error);

// promiseAll([randTime(11), Promise.reject('RRR'), randTime(33)])
//   .then(array => {
//     console.table(array);
//     console.log(JSON.stringify(array, null, '  '));
//     console.log('여긴 과연 호출될까?!');
//   })
//   .catch(error => {
//     console.log('reject!!!!!!>>', error);
//   });
