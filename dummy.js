function debounce3(func, ms = 1000) {
  let timer;

  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => func(...arguments), ms);
  };
}

let printMe = (msg) => console.log(msg);
let debounceFunc3 = debounce3(printMe, 3000);
let msg = "Debounce3 test.";

debounceFunc3(msg);
debounceFunc3(msg);
