// add.js
const add = (numbers) => {
    const deleimter = numbers.startsWith('//') ? numbers[2] : ',';
    const cleanedNumbers = numbers.startsWith('//') ? numbers.replace(`//${deleimter}\n`, '') : numbers;
    
    const splitedNumbers = cleanedNumbers.split(new RegExp(`[\\n${deleimter}]`));
    return splitedNumbers.reduce((acc, curr) => acc + Number(curr), 0);
  };
  
  module.exports = add;
  