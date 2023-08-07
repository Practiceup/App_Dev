console.log("---For loops---")

console.log("---Example 1---")
for (let counter = 10; counter >= 0; counter--) {
    console.log(`Currently counting ${counter}`)
}

console.log("---Example 2---")
let initialNum = parseInt(prompt("Enter a number between 0 and 90"))
for (initialNum; initialNum >= 0; initialNum--) {
    if (initialNum % 5 === 0) {
        console.log(`Counting = ${initialNum}`)
    }
}

// For of Loop
console.log("---Example 6---")
let cars = ["Mazda", "Tesla", "Dodge", "BMW", "Porsche"]
for (let eachCar of cars) {
    console.log(eachCar)
}

console.log("---Example 8---")

for (let outerCounter = 1; outerCounter <= 5; outerCounter++) {
    console.log(`Outer counter = ${outerCounter}`)
    for (let innerCounter = 30; innerCounter >= 0; innerCounter -= 10) {
        console.log(`\t\t Inner couneter = ${innerCounter}`)
    }
}

// While Loops
console.log("---Example 9---")
let i = 10
while (i >= 0) {
    console.log(`Currently counting ${i}`)
    i--
}

let userNum = parseInt(prompt("Enter a number"))
let checkUserNum = isNaN(userNum)
while (checkUserNum) {
    userNum = parseInt(prompt("You did not enter a number. Try again"))
    checkUserNum = isNaN(userNum)
}
console.log(`You entered ${userNum}`)

// Break and continue statement
console.log("---Example 11---")
for (let counter = 5; counter >= -10; counter--) {
    if (counter === -3) {
        continue
    } else {
        console.log(`Counting = ${counter}`)
    }
}

console.log("---Example 12---")
for (let y = -10; y <= 10; y++) {
    if (y % 2 === 0) {
        continue
    } else {
        console.log(y)
    }
}

// Functions
console.log("---Example 2---")

function printCount() {
    for (let n = 3; n > 0; n -= 1) {
        console.log(n)
    }
}

function greeting(name) {
    console.log(`Hello ${name}`)
}

function greet(firstName, lastName) {
    console.log("---Example 5---")
    console.log(`Hello ${firstName} ${lastName[0].toUpperCase()}`)
}

// function doubleNumber(number) {
//     console.log("---Example 9---")
//     number *= 2
//     return number
// }

// ---Class Activity---
// When function is called and the user doesn't enter an argument, number as argument, the program will ask the user to enter a number. the function willfully run when the user enters an argument

function doubleNumber(number) {
    console.log("Class Activity - Modify code")

    let inputNum = parseInt(prompt("Enter a number between 1 and 100"))
    let checkInputNum = isNaN(inputNum)

    if (inputNum === "" || inputNum === null || checkInputNum == true)
        while (checkInputNum) {
            inputNum = parseInt(prompt("You did not enter a number. Try again"))
            checkInputNum = isNaN(inputNum)
        } else {
        number = inputNum * 2;
        console.log(number)
    }
}

doubleNumber()
