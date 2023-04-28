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
// console.log(multiply(1));
// console.log(multiply(0));
// console.log(multiply(3));
// console.log(multiply(10));

// third

/*
Реализовать модуль, который работает со строкой и имеет методы:

a. установить строку

i. если передано пустое значение, то установить пустую строку

ii. если передано число, число привести к строке

b. получить строку

c. получить длину строки

d. получить строку-перевертыш

Пример:

модуль.установитьСтроку(‘abcde’);

модуль.получитьСтроку(); // ‘abcde’

модуль.получитьДлину(); // 5
*/

const strMd = () => {
  let str = "";
  function setStr(val = "") {
    str = String(val);
    return val;
  }
  function getStr() {
    return str;
  }
  function getLengthStr() {
    return str.length;
  }
  function getReverseStr(reverseStr = "") {
    reverseStr = str.split("");
    reverseStr = reverseStr.reverse();
    reverseStr = reverseStr.join("");
    return reverseStr;
  }
  return {
    setStr,
    getStr,
    getLengthStr,
    getReverseStr,
  };
};
const result = strMd();
console.log(result.setStr("sdrw"));
console.log(result.getStr());
console.log(result.getLengthStr());
console.log(result.getReverseStr());
