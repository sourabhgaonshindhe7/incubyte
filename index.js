const add = (numbers) => {
    return numbers.split(',').reduce((acc, curr) => acc + Number(curr), 0)
} 

add('2,4,5')