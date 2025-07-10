const add = function(f, s) {
  return (f + s);
};

const subtract = function(f, s) {
	return (f - s);
};

const sum = function(a) {
  let aSum = 0;
  for (let i = 0; i < a.length; i++){
    aSum += a[i];
  }
  return aSum;
	
};

const multiply = function(a) {
  let aSum = 1;
  for (let i = 0; i < a.length; i++){
    aSum *= a[i];
  }
  return aSum;
};

const power = function(f, s) {
  let aSum = 1;
  for (let i = 0; i < s; i++){
    aSum *= f;
  }
  return aSum;	
};

const factorial = function(f) {
  let aSum = 1;
  for (let i = 1; i <= f; i++){
    aSum *= i;
  }
  return aSum;
	
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
