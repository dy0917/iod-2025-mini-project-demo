
let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};
const result = Object.entries(salaries).sort((a, b) => {
  return a[1] - b[1] < 0 ? 1 : -1;
});
console.log(
  Object.entries(salaries).sort((a, b) => {
    return a[1] - b[1] < 0 ? 1 : -1;
  })
);

console.log(result[0][0]);
