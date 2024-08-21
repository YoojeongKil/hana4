var sum = 0;
for (let i = 1; i <= 100; i += 1) {
    sum = sum + i;
    if(sum > 1000) break;
}
console.log("🚀 for1 - sum:", sum);

sum = 0;
for (let i = 0; i < 100; sum = sum + (i += 1)) { }
console.log("🚀 for2 - sum:", sum);

sum = 0;
let i = 1;
while (i <= 100) {
    sum += i;
    i += 1;
}
console.log("🚀 while - sum:", sum);

sum = 0;
i = 0;
do {
    i += 1;
    if (i % 2 === 0) continue; // 홀수만 저장
    sum += i;
} while (i < 100);
console.log("🚀 do~while - sum:", sum);

//---------
if (sum > 0 && sum <= 10) {
    console.log('sum=', sum);
} else if (sum > 0) {
    console.log('sum is over 10!');
} else {
    console.log('sum is zero!');
}

console.log(sum > 10 ? 'T' : 'F');

const bloodType = 'A';

let sports = '운동';
if (bloodType === 'A' || bloodType === 'B') {
    sports = '근대5종';
} else if (bloodType === 'O') {
    sports = '배드민턴';
} else if (bloodType === 'AB') {
    sports = '야구';
} else {
    sports = '운동';
}
console.log("🚀 sports:", sports)

switch (bloodType) {
    case 'A':
    case 'B':
        sports = '근대5종';
        break;
    case 'O':
        sports = '배드민턴';
        break;
    case 'AB':
        sports = '야구';
        break;
    default:
        sports = '운동';
}

console.log("🚀 sports:", sports)

console.log('------------------');
x = 30;
let ret = x === 1 ? 'one' : x === 2 ? 'two' : x === 3 ? 'three' : 'ELSE';
console.log('🚀  ret:', ret);

ret =
  (x === 1 ? 'one' : '') ||
  (x === 2 ? 'two' : '') ||
  (x === 3 ? 'three' : '') ||
  'ELSE';
console.log('🚀  ret:', ret);

const alpha = ['zero', 'one', 'two', 'three'];
console.log('🚀  ret:', alpha[x] ?? 'ELSE');