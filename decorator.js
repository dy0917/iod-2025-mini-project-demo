function printGreeting(name) {
  // simple undecorated function
  console.log("Hello, " + name);
}

function countto10(increase = 1, limit = 10) {
  console.log(increase, limit);
  for (let i; i < limit; i = i + increase) {
    console.log(i);
  }
}
printGreeting("Undecorated");
function loggingTimingDecorator(originalFunction) {
  // decorator takes a function as parameter
  return function () {
    // and returns that function with extra bits - timing/logging
    console.time("Function timer"); // start a timer
    console.log(`\nExecuting function ...`); // log a message
    const result = originalFunction(...arguments); // execute the original function and store result
    console.timeEnd("Function timer"); // stop the timer
    return result; // return the result of running the original function
  };
}
// // returns the original function WITH the timing/logging features included
const decoratedPrintGreeting = loggingTimingDecorator(printGreeting);
decoratedPrintGreeting("Decorated"); // we can still call the decorated version in the same way

const decoratedCounter = loggingTimingDecorator(countto10);
decoratedCounter(2, 20);
