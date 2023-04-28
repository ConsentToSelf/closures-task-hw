// first

/*
Создайте функцию которая бы умела делать:

minus(10)(6); // 4

minus(5)(6); // -1

minus(10)(); // 10

minus()(6); // -6

minus()(); // 0

Подсказка, функция minus должна возвращать другую функцию.
*/

const minus = (x = 0) => {
  return function (k = 0) {
    return (x -= k);
  };
};
const res = minus()(6);
// console.log(res);

// second

/*
Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:

function multiplyMaker ...

const multiply = multiplyMaker(2);

multiply(2); // 4 (2 * 2)

multiply(1); // 4 (4 * 1)

multiply(3); // 12 (4 * 3)

multiply(10); // 120 (12 * 10)

*/
const multiplyMaker = (num = 0) => {
  let k = num;
  return function (x = 0) {
    return (k *= x);
  };
};

const multiply = multiplyMaker(2);
console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10));


