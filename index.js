// index.js
const add = (numbers) => {
    const deleimter = numbers.startsWith('//') ? numbers[2] : ',';
    const cleanedNumbers = numbers.startsWith('//') ? numbers.replace(`//${deleimter}\n`, '') : numbers;
    
    const splitedNumbers = cleanedNumbers.split(new RegExp(`[\\n${deleimter}]`));
    return splitedNumbers.reduce((acc, curr) => {
      const currentNumber = Number(curr);
      if (currentNumber < 0) {
        throw new Error(`negative numbers not allowed ${currentNumber}`);
      }
      return acc + currentNumber;
    }, 0);
  };
  
  module.exports = add;
  