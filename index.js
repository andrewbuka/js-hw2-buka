/**
 * @param {number} a
 * @param {number} b
 * @param {function} callback
 * @return {number | string}
 */
// This function should check if a and b numbers. If not - return error message
const checkNumbers = (a, b, callback) => {  
  callback(a, b);
  return areNumbers();
};

function areNumbers(a, b) {
  if (typeof(a) === 'number' && typeof(b) === 'number') {
    return 1;
  }
  
  else {
    return 'Error with numbers. Operation impossible';
  }
};

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// function should return sum of two numbers
const sum = (a, b) => {  
  return a + b;
};

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// function should subtract two numbers
const subtract = (a, b) => {  
  return a - b;
};

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// function should multiply two numbers
const multiply = (a, b) => {
  return a * b;  
};

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// function should divide two numbers
const divide = (a, b) => {  
  return a / b;
};

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// function should get modulus of two numbers
const getModulus = (a, b) => {  
  return a - Math.floor(a / b) * b;
};

/**
 * @param {string} messageType
 * @return {function(*): string }
 */
// Create function that returns another function and combine messageType with message (see tests)
const formatLogger = (messageType) => {    
  return function answer(messageAnswer) {
    return `${messageType}: ${messageAnswer}`;
  }
};

/**
 * @param {number} num1
 * @param {number} num2
 * @param {function} callback1
 * @param {function} callback2
 * @return {number | string}
 */
// Create function that receives two numbers, and two callbacks
  // It should check if two numbers are real numbers and return result of the second callback. In case it's not a numbers - it should return error message with firstCallback
const calculateResult = (num1, num2, callback1, callback2) => {
    
  callback1(num1, num2, areNumbers);
  callback2(num1, num2);

  if (typeof(num1) === 'number' && typeof(num2) === 'number') {
    return  callback2(num1, num2);
  }

  else {
    return  callback1(num1, num2, areNumbers);
  }
}

module.exports = {
  checkNumbers,
  sum,
  subtract,
  multiply,
  divide,
  getModulus,
  calculateResult,
  formatLogger,
};
