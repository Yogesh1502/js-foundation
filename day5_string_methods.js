let str = "  Aditya Nath Yogi is learning JavaScript and MERN stack  ";

let trim = str.trim();
console.log(trim);
// Aditya Nath Yogi is learning JavaScript and MERN stack

let uppercase = trim.toUpperCase();
console.log(uppercase);

let lowercase = uppercase.toLowerCase();
console.log(lowercase);

let includes = lowercase.includes("javascript");
console.log(includes);

let replace = lowercase.replace("mern", "FULLSTACK");
console.log(replace);

let slice = replace.slice(0,39);
console.log(slice);

let split = slice.split(" ",5);
console.log(split);

let startWith = slice.startsWith("Aditya");
console.log(startWith);  // false

let endsWith = slice.endsWith("javascript");
console.log(endsWith);  // true


let name = prompt("Enter User Name");
console.log(`Hello , ${name}! Welcome to the world of JavaScript and MERN stack`);



