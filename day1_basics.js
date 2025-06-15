//Statement used to print in console
console.log(" My name is Khan");

// variables in js
// Varables are container for data
name = 'Tony stark';
console.log(name);

age=23;
console.log(age);

x=null;
console.log(x);

y=undefined;
console.log(y);

// boolean type
isTrue = true;
console.log(isTrue);

// js is dynamically type language means we can store any value in any variable.
// js can automatically calculate type of variable in run type.

// but above declared varible is not proper method to run a code.
// we have to use a reserved keyword to declare a variable i.e let, var, const.

// variables are of 3 types
// var: A global scope variable can be redeclare and updated the values.
var name = "Rohit";
console.log(name);

// let: A block scope variable cann't be redeclare but can be updated the values.
let num= 1253;
    num = 2563;
    console.log(num);

// const: A block scope variable connot be re-declare or updated.
const pi = 3.14;
    console.log(pi);
    // let and const are block scoope variable.block means { code inside this }

 
// Data Types
//  primitive data types-->Number, String, boolean, undefined, null, Bigint, Symbol

let z=8.98;
console.log(typeof z);
// using typeof keyword we can check type of data types

//  Non-primitive data types: objects(Collection of values)
/* Ex: Object {
    key:values
} */

const student = {   
    fullName : "Aman Rathore",
    age : 25,
    cgpa : 8.2,
    isPass : true
};

//student is object
console.log(student["fullName"]);
//as age
console.log(student.age); 

// how to assign new values in Object
student['age'] = student['age'] + 1;
console.log(student['age']);

student.fullName = 'Rahul';
console.log(student['fullName']);

const product = {
    name : 'Alovera Gel',
    rating :4.7,
    price : 270,
    offer : 5,
}
console.log(product);