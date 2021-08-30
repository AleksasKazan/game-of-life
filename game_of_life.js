"use strict";

function newField(xSize, ySize) {
    let field = new Array(ySize);
    for (let y = 0; y < ySize; y++) {
        field[y] = new Array(xSize);
    }
    return field;
}

const fieldX = 50;
const fieldY = 10;

// atsitiktinio lauko sugeneravimas
let field = newField(fieldX, fieldY);
for (let y = 0; y < field.length; y++) {
    for (let x = 0; x < field[y].length; x++) {
        if (Math.random() < 0.22) {
            field[y][x] = "X";
        } else {
            field[y][x] = ".";
        }
    }
}

// fiksuoto lauko sugeneravimas
// let field = [
//     [".", ".", ".", ".", ".", "."],
//     [".", ".", ".", "X", ".", "."],
//     [".", ".", "X", ".", "X", "."],
//     [".", ".", "X", "X", "X", "."],
//     [".", ".", "X", ".", "X", "."],
//     [".", ".", ".", ".", ".", "."]
// ];

// iteracijos spaussdinimas
for (let y = 0; y < field.length; y++) {
    let line = "";
    for (let x = 0; x < field[y].length; x++) {
        line += field[y][x];
    }
    console.log(line);
}
console.log("-----------------------");

// SPRENDIMAS
var fullArray = [];
for (let i = 0; i <= 50; i++) {
    // NAUJAS ARRAY
    let arr = JSON.parse(JSON.stringify(field));

    for (let y1 = 0; y1 < field.length; y1++) {
        let line1 = "";
        for (let x1 = 0; x1 < field[y1].length; x1++) {
            // PATIKRINIMAS
            if (field[y1][x1] == "X") {
                let counter = 0;
                if (y1 > 0 && x1 > 0 && field[y1 - 1][x1 - 1] == "X") {
                    counter++;
                }
                if (y1 > 0 && field[y1 - 1][x1] == "X") {
                    counter++;
                }
                if (y1 > 0 && x1 < field.length && field[y1 - 1][x1 + 1] == "X") {
                    counter++;
                }
                if (x1 > 0 && field[y1][x1 - 1] == "X") {
                    counter++;
                }
                if (x1 < field.length && field[y1][x1 + 1] == "X") {
                    counter++;
                }
                if (y1 < field.length - 1 && x1 > 0 && field[y1 + 1][x1 - 1] == "X") {
                    counter++;
                }
                if (y1 < field.length - 1 && field[y1 + 1][x1] == "X") {
                    counter++;
                }
                if (x1 < field.length && y1 < field.length - 1 && field[y1 + 1][x1 + 1] == "X") {
                    counter++;
                }
                if (counter != 2 && counter != 3) {
                    arr[y1][x1] = ".";
                }
            } else if (field[y1][x1] == ".") {
                let counter2 = 0;
                if (y1 > 0 && x1 > 0 && field[y1 - 1][x1 - 1] == "X") {
                    counter2++;
                }
                if (y1 > 0 && field[y1 - 1][x1] == "X") {
                    counter2++;
                }
                if (y1 > 0 && x1 < field.length && field[y1 - 1][x1 + 1] == "X") {
                    counter2++;
                }
                if (x1 > 0 && field[y1][x1 - 1] == "X") {
                    counter2++;
                }
                if (x1 < field.length && field[y1][x1 + 1] == "X") {
                    counter2++;
                }
                if (y1 < field.length - 1 && x1 > 0 && field[y1 + 1][x1 - 1] == "X") {
                    counter2++;
                }
                if (y1 < field.length - 1 && field[y1 + 1][x1] == "X") {
                    counter2++;
                }
                if (x1 < field.length && y1 < field.length - 1 && field[y1 + 1][x1 + 1] == "X") {
                    counter2++;
                }
                if (counter2 == 3) {
                    arr[y1][x1] = "X";
                }
            }
            line1 += arr[y1][x1];
        }
        // 1. atspausdinti 50 iteraciju
        console.log(line1);
    }
    // 3. nutraukti spausdinima, jei nauja iteracija jau buvo istorijoje
    for (var j = 1; j < fullArray.length; j++) {
        var breakRepeat = JSON.stringify(arr) == JSON.stringify(fullArray[j]);
    }
    if (breakRepeat) {
        break;
    }
    fullArray.push(arr);
    // 2. nutraukti spausdinima, jei nauja iteracija tokia pati, kaip ir pries tai buvusi
    // if (JSON.stringify(field) == JSON.stringify(arr)) {
    //     break;
    // }
    field = arr;
    console.log(i, "-----------------------");
}