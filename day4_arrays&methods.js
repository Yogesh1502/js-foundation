// array of numbers and pusch 2 new items.
let arr = [1, 2, 3, 4, 5, 6];
arr.push(7, 8);  // [1,2,3,4,5,6,7,8]
console.log(arr);

// remove last and first item
arr.pop();
console.log(arr) // [1,2,3,4,5,6,7]
arr.shift()
console.log(arr) // [2,3,4,5,6]

// add an item at start
arr.unshift(8);
console.log(arr); // [8,2,3,4,5,6]

const marks = [45, 67, 33, 89, 90, 55, 21];

// filter to get marks >=50
let filteredMarks = marks.filter((mark) => {
    return mark >= 50
});
console.log(filteredMarks);

// use map to oonvert marks to grade(>=90 -- A, >=70 -- B,etc);
let convertMToG = marks.map((item) => {
    if (item >= 90) {
        return 'A';
    } else if (item >= 70) {
        return 'B';
    } else if (item >= 50) {
        return 'C';
    } else {
        return 'D';
    }
});
console.log(convertMToG);

// reduce() to calculate total marks
const reducedMarks = marks.reduce((m1,m2)=>{
    return m1+m2;   
});
console.log(reducedMarks);  // 400

// sort() to arrange in ascending order
marks.sort(); // [21, 33, 45, 55, 67, 89, 90]

// includes() to check if 67 exist
marks.includes(67); // true

//  find() to get first mark < 40
let found = marks.find((mark)=>{
    return mark >40;
})
console.log(found);  //45



