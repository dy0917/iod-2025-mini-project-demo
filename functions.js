const printFibonacci = function () {
  let counter = 0;

  const timeId = setInterval(() => {
    fibonacci(1, 1);
  }, 50);

  const fibonacci = function (x = 0, y) {
    counter++;
    counter > 10 ? clearInterval(timeId) : fibonacci(y, x + y);
  };
};

printFibonacci();
