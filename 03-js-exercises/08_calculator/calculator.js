const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;	
};

const sum = function(arr) {
	let sum = 0;
  arr.forEach(num => sum += num);
  return sum;
};

const multiply = function(arr) {
  let prod = 1;
  arr.forEach(num => prod *= num);
  return prod;
};

const power = function(x, y) {
  let prod = 1;
  for (let i=0; i<y; i++) {prod *= x};
  return prod;
};

const factorial = function(x) {
  let prod = 1;
	if (x === 0) {return prod};
  for (let i=x; i>0; i--){prod *= i};
  return prod;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
