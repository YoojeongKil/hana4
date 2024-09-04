const assert = require("assert");

const rand = (s, e) => s + Math.floor((e - s + 1) * Math.random());

function ex1() {
  const d1 = new Date("1970-01-01T00:00:00.000Z");
  const d2 = new Date("1970-01-02T00:00:00.000Z");

  // console.log('🚀  d1:', d1.getTime());
  return (d2.getTime() - d1.getTime()) / 1000;
}
// console.log(ex1());
assert.strictEqual(ex1(), 86400);

function ex2() {
  const d = new Date();
  d.setMonth(d.getMonth() + 1);
  d.setDate(0);
  // 중복발생!
  // const randDates = Array(5)
  //   .fill(0)
  //   .map(() => rand(1, lastDate));
  const lastDate = d.getDate();
  const randDates = [];
  do {
    const rdate = rand(1, lastDate);
    if (!randDates.includes(rdate)) randDates.push(rdate);
    // randDates = [...new Set(randDates)];
  } while (randDates.length < 5);

  console.log("🚀  d:", d, lastDate, randDates);

  return randDates.sort((a, b) => (a > b ? 1 : -1));
}
const ret2 = ex2();
console.log(ret2);
let prev = ret2[0];
for (let i = 1; i < ret2.length; i++) {
  assert.equal(prev < ret2[i], true);
  prev = ret2[i];
}

const nextYear = new Date();
nextYear.setFullYear(nextYear.getFullYear() + 1);
const nextYearWeek = "일월화수목금토"[nextYear.getDay()];
console.log("🚀  nextYearWeek:", nextYearWeek);

const after100 = new Date();
console.log("🚀  after100:", after100);
after100.setDate(after100.getDate() + 100);
console.log("🚀  after100:", after100.toLocaleDateString());
