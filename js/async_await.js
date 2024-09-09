const afterTime = (sec) =>
  new Promise((resolve, reject) => setTimeout(resolve, sec * 1000, sec));

// const odds = [1, 2, 3].filter(async val => {
//   const r = await afterTime(val);
//   // console.log('filter.r=', r);
//   return r % 2 === 1;
// });
// console.log('odds=', odds);

// const rrr = (await Promise.all([1, 2, 3].map(afterTime))).filter(n => n % 2);
// console.log('🚀 --> rrr:', rrr);

// // ------------------------------
// const r1 = await afterTime(1);
// console.log('🚀  r1:', r1);
// // afterTime(1).then(r1 => console.log('🚀  r1:', r1));

// function f1() {
//   afterTime(0.5).then(console.log);
// }

// async function f2() {
//   const r2 = await afterTime(1);
//   console.log('🚀  r2:', r2);
//   return r2;
// }

// const rf1 = f1();
// const rf2 = await f2();
// console.log('🚀  rf1/2:', rf1, rf2);

// function layout() {
//   (async () => {
//     const r3 = await afterTime(1);
//     console.log('🚀  r3:', r3);
//   })(); // IIFE
// }
// layout();

// console.log('----------------');
// const mapResult = [1, 2, 3].map(async val => {
//   const r = await afterTime(val);
//   console.log(r);
//   return r;
// });
// console.log('mapResult=', mapResult);

// async function sleep(n) {
//   await new Promise(resolve => setTimeout(resolve, n * 100));
// }
// console.log('11', new Date());
// // await sleep(2);
// await new Promise(resolve => setTimeout(resolve, 2 * 100));
// console.log('22', new Date());

// // --------------------
console.time("for-await-of");
const arr = [afterTime(1), afterTime(2)];
for (const fo of arr) {
  // for (const fo of arr.values()) {
  console.log("fo=", await fo);
}

for await (const fao of arr.values()) {
  console.log("fao=", fao);
}
console.timeEnd("for-await-of");
