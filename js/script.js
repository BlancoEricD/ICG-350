// Out (re)introduction to javascript.

// 1. What is a variable?
let myVariable = "Some information"; // a string
let myNumber = 100;

// 2. CPmdotopma Statements
if(myNumber > 50) {
    console.log("wowzer, a big number!"); // Will this execute?
}

//3. Looping
for(let i =0; i < myNumber; i++) {
    console.log(i); // This executed 100 times!
}

// 4. Functions
console.log("The sum of 10 + 20 is equal to" + sum(10,20));
console.log("The sum of 10 + 20 is equal to" + sum(60,10));
console.log("The sum of 10 + 20 is equal to" + sum(600,2284));


function sum(a, b) {
    return a + b;
}

