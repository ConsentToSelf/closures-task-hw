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
console.log(res);
