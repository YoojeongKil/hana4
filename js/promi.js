const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("XX");
    // reject('Error');
    resolve("OK");
  }, 1000);
});

console.log("p=", p);

const ppp = p
  .then((succResult) => {
    console.log("🚀  succResult:", succResult, p);
    return new Promise((resolve) => resolve("OKPPP"));
  })
  .then((y) => {
    console.log("y=", y);
    return "ZZZ";
  });

ppp.then((x) => console.log("ppp.x=", x));
p.then((x) => console.log("p.x=", x));

// .catch (error => {
//   console.log('🚀  error:', error, p);
// });
