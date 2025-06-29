const users = [
    { id: 1, name: "Elon Musk", age: 22, isActive: true },
    { id: 2, name: "Mark Zuckerberg", age: 25, isActive: false },
    { id: 3, name: "Satya Nadella", age: 28, isActive: true }
];

// 1. print name of all users
users.forEach(user => {
    console.log(user.name);
})

// 2. Get all active users using filter()
let activeUsers = users.filter(user => {
    return user.isActive;
})
// console.log(activeUsers);

// 3. Get user by id using find()
let userByid = users.find(user => {
    return user.id === 2;
})
// console.log(users);

// 4. Add a new user
users.push({ id: 4, name: "Jeff Bezos", age: 30, isActive: true });

// 5. Update age of user with id = 1
users.find(user => {
    if (user.id == 1) {
        return user.age = 35;
    }
})
console.log(users);


let cart = [
    { name: "Shampoo", price: 100, qty: 2 },
    { name: "Soap", price: 50, qty: 3 }
];

function getTotal(cart) {
    let total = 0;
    cart.map(item => {
        total += item.price * item.qty
    })
    return total;
}
// console.log(getTotal());

// or
let total = cart.map(obj => {
    return obj.price * obj.qty
}).reduce((a, b) => a + b, 0)

// console.log(total);

// adding new item to cart
cart.push({ name: "Conditioner", price: 150, qty: 3 });

// updating qty of shampoo
cart[0].qty = 3;

// remove soap from cart 
cart = cart.filter(obj => {
    return obj.name != "Soap";
})


console.log(cart);