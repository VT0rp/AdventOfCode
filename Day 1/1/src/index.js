const fs = require("fs");

const lines = fs.readFileSync('./src/data/data.txt', 'utf8').trim().split("\n");

//First half of the first advent day puzzle

function getNumberFirst(array){
    const values = lines
    .map((line) => {
        let first = line.split('').find((v) => /^\d+$/.test(v));
        let last = line.split('').findLast((v) => /^\d+$/.test(v));
        return Number("" + first + last);
    });

    return values.reduce((sum, value) => sum + value);
}

//Second half

function getNumberSecond(array){
    const equivalence = {1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9};
    const firstNumberWordsRegExp = new RegExp([1, 2, 3, 4, 5, 6, 7, 8, 9, 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].join("|"));
    const lastNumberWordsRegExp = new RegExp([1, 2, 3, 4, 5, 6, 7, 8, 9, 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].join("|").split('').reverse().join(''));
    const values = lines
    .map((line) => {
        let firstOne = line.match(firstNumberWordsRegExp);
        let firstNumber = equivalence[firstOne[0]];
        let lastOne = line.split('').reverse().join('').match(lastNumberWordsRegExp);
        let lastNumber = equivalence[lastOne[0].split('').reverse().join('')];
        return Number("" + firstNumber + lastNumber);
    });

    return values.reduce((sum, value) => sum + value);
}
console.log("First part: " + getNumberFirst(lines));
console.log("Second part: " + getNumberSecond(lines));