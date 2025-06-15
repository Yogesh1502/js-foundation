// Check if number is even or odd
let num = 10;
if (num %2 == 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}

// Print day name using switch
let day = prompt("Enter 1st 3 letter of of day");
switch (day) {
    case 'Mon':
        console.log("Monday");
        break;
    case 'Tue':
        console.log("Tuesday");
        break;
    case 'Wed':
        console.log("Wednesday");
        break;
    case 'Thu':
        console.log("Thursday");
        break;
    case 'Fri':
        console.log("Friday");
        break;
    case 'Sat':
        console.log("Saturday");
        break;
    case 'Sun':
        console.log("Sunday");
        break;
}

// Find maximum of 3 numbers
let a = 10;
let b = 20;
let c = 30;

if(a>b || a>c){
    console.log("a is greater");
} else if(b>c){
    console.log("b is greater");
} else {
    console.log("c is greater");
}

// Loop from 1 to 10 and print squares
for(let i=1; i<=10; i++){
    let sq = i**2;
    console.log(sq);
}

// Loop and skip numbers divisible by 3 using continue
for(let i=1;i<100;i++){
    if(i%3==0){
        continue;
    }
    console.log(i);
}

// Ask user (use prompt or hardcode) to enter marks and give:

let score = prompt("Enter a score");
let grade;
if (score >= 80 && score <= 100) {
    grade = "A";
} else if (score >= 70 && score <= 79) {
    grade = "B";
} else if (score >= 60 && score <= 69) {
    grade = "C";
} else if (score >= 50 && score <= 59) {
    grade = "D";
} else if (score >= 0 && score <= 49) {
    grade = "E";
}
console.log("Grade is: ", grade);


// print start pattern
for(let i=0;i<5;i++){
    for(let j=0;j<=i;j++){
        document.write("* ");
    }
    document.write("<br/>");
}

for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "* ";
    }
    console.log(stars);
}
