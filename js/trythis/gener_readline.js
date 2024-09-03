const readline = require("readline");
const { stdin: input } = require("process");

function* add() {
  const x = yield "첫 번째 수?";
  const y = yield "두 번째 수?";
  return x + y;
}

const rl = readline.createInterface({ input });

const itAdd = add();
console.log(itAdd.next().value);

rl.on("line", (answer) => {
  const { value, done } = itAdd.next(+answer);
  if (done) {
    console.log("Total: ", value);
    rl.close();
  } else {
    console.log(value);
  }
}).on("close", () => {
  process.exit();
});
