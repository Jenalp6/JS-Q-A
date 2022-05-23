// <!-- Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer -->



// ! ÇÖZÜM 1


// let x = "9119";

// let a = x.split("").map(square);

// function square(value){
//     return v**2;
// }

// console.log(square(9));

//! ÇÖZÜM 2

function squareDigits(num){
    return parseInt(num.toString().split("").map((g) => g**2).join(""));
}