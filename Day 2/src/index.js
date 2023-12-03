const fs = require("fs");

const lines = fs.readFileSync('./src/data/data.txt', 'utf8').trim().split("\n");
const colors = ['red', 'green', 'blue'];
const elfColors = [12, 13, 14];


//First part
//Function to see if the conditions are done
function possible(array){
    let pos = true;
    array.forEach((colors) => {
        if(Number(colors[0]) <= parseInt(elfColors[0]) && colors[1] <= parseInt(elfColors[1]) && colors[2] <= parseInt(elfColors[2])){
        }else{
            pos = false;
        }
    })
    return pos;
}
//Function first part
function firstPart(){
    const something = false;
    const sum = lines
    .map((line) => {
        //Take id
        const gameId = line.split(':')[0].split(' ')[1];
        const groupColorsArray = [];
        //Take groups
        const groups = line.split(':')[1].split(';');
        //Split the group info by colors
        groups.forEach((group) => {
            const groupColors = group.split(',');
            const colorsArray = [0, 0 ,0];
            groupColors.forEach((color) => {
                //We take out the \r to make sure that does not interfere
                switch(color.split(' ')[2].replace('\r', '')){
                    case 'red':
                        colorsArray[0] = color.split(' ')[1].trim();
                        break;
                    case 'green':
                        colorsArray[1] = color.split(' ')[1].trim();
                        break;
                    case 'blue':
                        colorsArray[2] = color.split(' ')[1].trim();
                        break;
                    default:
                        something = true;
                        console.log("Something is wrong");
                        break;
                }
            })
            groupColorsArray.push(colorsArray);
        })
        return possible(groupColorsArray) ? Number(gameId) : 0;
    });

    return sum.reduce((s, v) => s + v);
}

//Second part
//Function to get the power of the sets
function getPower(array){
    let fewest = [0,0,0];
    let pos = true;
    array.forEach((colors) => {
        if(Number(colors[0]) > parseInt(fewest[0])) fewest[0] = colors[0];
        if(Number(colors[1]) > parseInt(fewest[1])) fewest[1] = colors[1];
        if(Number(colors[2]) > parseInt(fewest[2])) fewest[2] = colors[2];
    })
    return fewest.reduce((s,v) => s * v);
}
//Function of second part
function secondPart(){
    const something = false;
    const sum = lines
    .map((line) => {
        //Take id
        const gameId = line.split(':')[0].split(' ')[1];
        const groupColorsArray = [];
        //Take groups
        const groups = line.split(':')[1].split(';');
        //Split the group info by colors
        groups.forEach((group) => {
            const groupColors = group.split(',');
            const colorsArray = [0, 0 ,0];
            groupColors.forEach((color) => {
                //We take out the \r to make sure that does not interfere
                switch(color.split(' ')[2].replace('\r', '')){
                    case 'red':
                        colorsArray[0] = color.split(' ')[1].trim();
                        break;
                    case 'green':
                        colorsArray[1] = color.split(' ')[1].trim();
                        break;
                    case 'blue':
                        colorsArray[2] = color.split(' ')[1].trim();
                        break;
                    default:
                        something = true;
                        console.log("Something is wrong");
                        break;
                }
            })
            groupColorsArray.push(colorsArray);
        })
        return getPower(groupColorsArray);
    });

    return sum.reduce((s, v) => s + v);
}
console.log("First: " + firstPart());
console.log("Second: " + secondPart());