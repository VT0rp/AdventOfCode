const fs = require("fs");

const lines = fs.readFileSync('./src/data/example.txt', 'utf8').trim().split("\n");

const linesLenght = lines.length();
const lineLenght = lines[0].length();

//First part

function isSymbol(i, j){
    if(!(0 <= i < linesLenght && 0 <= j < lineLenght))return false
    return lines[i][j] != '.' && !(isNaN(lines[i][j]));
}
console.log(lines);