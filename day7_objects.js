// objects
// 1.
let user = {
    name: "Yogesh",
    age: 23,
    isActive: true,
    skills: ["HTML", "CSS", "JS"]
  };
// user is object
// object literal is used to create object {}
// it is collection of key : value pair (name: "Yogesh")


for(let key in user){
    console.log(user[key]);
}

const css = user["skills"][1];
console.log(css);

user["location"] = "India";

delete user.age;
console.log(user);

// 2. 
let product = {
    title: "Laptop",
    price: 50000,
    seller: {
      name: "Tech Store",
      rating: 4.5
    }
  };
// access property
const sellername = product.seller.name;
console.log(sellername);
// added property
product.discount = "10%";
// added method
product.finalprice = function(){
  console.log("this method is added lator with discount price")
  return this.price -(this.price*(10/100));
}

console.log(product.finalprice());

// 3.
let  calculator = {
  a: 10,
  b: 20,
  add(){
    return this.a + this.b;
  }
}
console.log(calculator.add())

// 4. object destructuring
const student = {
  name: "Ravi",
  grade: "A",
  city: "Delhi"
};

const { name, grade } = student;




