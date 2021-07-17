const add = function(firstNum, secondNum) {
	return firstNum + secondNum;
};


const subtract = function(firstNum, secondNum) {
	return firstNum - secondNum;
};

const sum = function(numbers) {
  let result = numbers.reduce((sum, number) => {
    sum += number;
    return sum;
  },0);
  return result;    
};

const multiply = function(numbers) {
  let result = numbers.reduce((sum, number) => {
    sum *= number;
    return sum;
  },1);
  return result; 
};

const power = function(number, power) {
	let result = 1;
  for (let i = 0 ; i < power ; i++) {
    result *= number;
  }
  return result;
};

const factorial = function(number) {
	let result = 1;
  for (number ; number > 0 ; number--) {
    result *= number;
  }
  return result;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
