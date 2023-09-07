function divideBy (firstNumber) {
  /**
   * divideBy - Returns a closure to perform divisions around a given number.
   * @firstNumber - Number to div by.
   * @secondNumber - Number to div by firstNumber, this value is passed by the closure.
   */
  return function (secondNumber) {
    return secondNumber / firstNumber;
  };
}

function addBy (firstNumber) {
  /**
   * divideBy - Returns a closure to perform adds around a given number.
   * @firstNumber - Number to add by.
   * @secondNumber - Number to add by firstNumber, this value is passed by the closure.
   */
  return function (secondNumber) {
    return firstNumber + secondNumber;
  };
}

/* Fisr take the first number */

const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);

/*
 * Now our variables are functions
 * for a specific purpose that can perform
 * with a second value/
 */
console.log(addBy100(20));
console.log(divideBy10(20));
console.log(divideBy100(200));
console.log(addBy1000(20));
