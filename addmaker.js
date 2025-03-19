// const addMaker = function (x) {
//   return function (y) {
//     return x + y;
//   };
// };

// const add5 = addMaker(5);
// console.log(add5(6));

const user = {
  firstName: "Angela",
  lastName: "Davis",
  role: "Professor",
};

const arrowFunction = () => {
  console.log("arrowFunction", this);
};

const normalFunction = function () {
  console.log("normalFunction", this);
};

