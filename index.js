// add.js
const add = (numbers) => {
    if (numbers === "") return 0;
    const splitedNumbers = numbers.split(/[\n,]/);
    return splitedNumbers.reduce((acc, curr) => acc + (isNaN(curr) ? 0 : Number(curr)), 0);
  };
  
  // Export the function so it can be tested
  module.exports = add;
  