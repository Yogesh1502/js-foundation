// how function works, types and its scope changes behaviour

/* Functions
 It is a block of code that performs a specific task, can be invoked whenever needed.
1. console.log('hello');
2. "abc".toUpperCase();   
3. [1,2,3].push(4);      

These are inbuilt function need not to define again.

function definition
function functionName(){
    // do some work
}

function functtionName (with param1, with param2...) {
    //do some work
}

fucntion call
functionName();
*/

function pressButton() {
    console.log('lights ON ');
}

function againPressButton(lightsoff) {   //parameter
    console.log(lightsoff);
}
// light ON
pressButton();
// lights OFF
againPressButton("lightsOFF");   //argument
// if we want to lights ON 2nd  time then we have to call function again.
pressButton();
// lights OFF
againPressButton("lightsOFF");


function rollDice() {
    let rand = Math.floor(Math.random() * 6 + 1);
    console.log(rand);
}
rollDice();


// function that return the  concatinate of all string in an array.
let str = ["hi", "how", "are", "you"];
function concat(str) {
    let newstr = "";
    for (let i = 0; i < str.length; i++) {
        newstr += str[i];
    }
    return newstr;
}
let result = concat(str);
console.log(result);


/*
 Scope
 deteremines the accessibility of variables, objects and functions from different parts of the the Code.
 1. function scope / blocked scope
 variable defined inside a function are not accessible (visible) from the outside of the function.
 2. Global Scope
 variable defined outside of any function are accessible from any part of the code.(within the function or outside the function).
 3. Block Scope
 variable defined inside a block {}(if, for, while) are not accessible from the outside of the block. 
*/


let num = 123; //global scope

function add(a, b) {
    let sum = a + b; // function scope
    console.log(sum);
    console.log(num) // accessible
}
add(2, 3);
console.log(num)  // accessible
// console.log(sum); // not accessible


{
    let a = 12;     // blocked scope
    console.log(a);    // accessible
}
// console.log(a);     // not accessible


for(let i=2;i<10;i++){
    console.log(i);
}
// console.log(i); // not accessible


let name = "shiv";
if(name){
    let god = "greatest";
    console.log(god);
}
// console.log(god)  // not accessible


// 4. lexical scope
// a variable defined outside a function is accessible inside the function defined after the variable declaration inside the outerfunction.
function outerfunc(){
    let num1 = 10;
    function innerfunc(){
        console.log(num1);
    }
    innerfunc();
}
outerfunc();

let arrowfunction = () =>{
    let num2 = 20;
    let arrowfunction2 = () =>{
        console.log(num2);
    }
    arrowfunction2();
}

// ex:
// add two numbers using arrow func
let addNum = (a,b) =>{
    return a +b;
}
console.log(addNum(10,20)); // 30

// Multiply two numbers using arrow func
let Multiply = (a,b) =>{
    return a * b;
}
console.log(Multiply(10,20)); // 200

// Check if number is even or odd (return true/false)
let checkEven = (num) =>{
    if(num%2==0){
        return true;
    } else{
        return false;
    }
}
console.log(checkEven(258));

// Convert Celsius to Fahrenheit
function convertCtoF(celsius){
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
convertCtoF(0); // 32





