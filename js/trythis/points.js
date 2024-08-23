function ex1() {
  for (let i = 0.1; i < 1; i = i + 0.1) {
    console.log(+i.toFixed(1)); //+ 앞에 추가해서 Number로 Casting
  }
}

ex1();

function ex2() {
  for (let i = 1; i <= 10; i += 1) {
    const s = Math.sqrt(i);
    //   if (!Number.isInteger(s)) {
    if (s % 1 !== 0) {
      console.log(i, +s.toFixed(3));
    }
  }
}

ex2();

// 추가문제
function printIrr(n) {
  do {
    const s = Math.sqrt(n);
    console.log("🚀 s:", +s.toFixed(3));
    // if (!(Math.sqrt(n + 1) % 1)) break;
    if (Math.sqrt(n + 1) % 1 === 0) break;
    n += 1;
  } while (true);
}

printIrr(5);
console.log("--------------");
printIrr(9);

const WEEK_NAMES = [..."일월화수목금토"];
function ex3() {
  const today = new Date();
  const todayWeekDay = today.getDay();
  console.log("🚀 todayWeek:", todayWeekDay);
  console.log(`오늘은 ${WEEK_NAMES[todayWeekDay]}요일입니다.`);

  let weekName;
  switch (todayWeekDay) {
    case 0:
      const x = 1;
      weekName = "일";
      break;
    case 1:
      weekName = "월";
      break;
    case 2:
      weekName = "화";
      break;
    case 3:
      weekName = "수";
      break;
    case 4:
      weekName = "목";
      break;
    case 5:
      weekName = "금";
      break;
    case 6:
      weekName = "토";
      break;
  }
  console.log(`오늘은 ${weekName}요일입니다.`);
}

ex3();

function ex4() {
  // 소수점 길이 구하기
  function pointLength(f) {
    //   return f.toString().split(".")[1]?.length ?? 0; // 소수점 없을 경우 에러, ? 추가
    return f.toString().length - Math.trunc(f).toString().length - 1;
  }

  function addPoints(a, b) {
    //   const alen = a.toString().length - Math.trunc(a).toString().length - 1;
    //   const blen = b.toString().length - Math.trunc(b).toString().length - 1;
    const alen = pointLength(a);
    const blen = pointLength(b);

    const ret = (a + b).toFixed(alen > blen ? alen : blen);
    //   const ret = (a + b).toFixed(Math.max(alen, blen));
    console.log("🚀  ret:", a, b, "==>", ret);
  }

  addPoints(0.21354, 0.1); // 0.31354
  addPoints(0.14, 0.28); // 0.42
  addPoints(0.34, 0.226); // 0.566
  addPoints(10.34, 200.226);
  addPoints(0.143, 10.28);
  addPoints(4000.34, 100.226);
  addPoints(0.143, -10.28);
  addPoints(4000.34, -100.226);
}

ex4();
