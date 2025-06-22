for(let i=0;i<4;i++){
    let emoji="";
    for(let j=0;j<4;j++){
    emoji+= "😀 "
    }
    console.log(emoji);
}

let row =5;
for(let i=0; i<row; i++){
    let emoji = "";
    for(let j=0;j<=i;j++){
        emoji += "😀 ";
    }
    console.log(emoji);
}

let num=4;
for(let i=1;i<=num;i++){
    let str = ""
    for(j=1;j<=i;j++){
        str+= j + " ";
    }
    console.log(str);
}

let row = 5;
for (let i = 0; i < row; i++) {
    let str = ""
    for (j = row-i; j > 0; j--) {
        str += "* ";
    }
    console.log(str);
}

let count = 1
for (let i = 0; i < 5; i++) {
   let str = "";
    for (let j = 0; j < i+1; j++){
        str+=count++ + "  ";
    }
    console.log(str);
}


// factorial of a number
function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}
console.log(factorial(4));

// check if num is prime
function isPrime(num) {
    if (num < 1)
        return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}
console.log(isPrime(31));

// all even num between 1 to 100
let str = " ";
for (let i = 0; i < 100; i++) {
    if(i%2==0){
        str+=i + " ";
    }
}
console.log(str);

// multiplication of a num
let str = " ";
for(let i=1;i<=10;i++){
    str+=(i*5) + " ";
}
console.log(str);
