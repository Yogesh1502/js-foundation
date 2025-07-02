const products = [
    { id: 1, name: "Mobile", price: 15000, rating: 4.3 },
    { id: 2, name: "Laptop", price: 50000, rating: 4.7 },
    { id: 3, name: "Tablet", price: 25000, rating: 4.1 },
    { id: 4, name: "Headphones", price: 2000, rating: 4.0 }
];

// 1. Sort products by price (ascending & descending)
products.sort((a, b) => a.price - b.price);

// 2. Sort products by rating (high to low)
products.sort((a,b)=> b.rating - a.rating);

// 3.  Find product with price = 50000
let found = products.find(obj => {
    return obj.price == 50000;
});
// console.log(found)

//   Filter products with price < 20000
let filtered = products.filter(obj => {
    return obj.price < 20000;
})
console.log(filtered);

//   Check if all products are rated above 3.5
let rated = products.every(product => {
    return product.rating > 3.5;
})
// console.log(rated);

//   Add new product
products.push({ id: 5, name: "sandwitch", price: 1000, rating: 4.5 });

//   Update price of product with id = 2
let update = products.find(obj => { return obj.id == 2 })
update.price = 30000;
// console.log(products)

//   Remove product with id = 3
let index = products.findIndex(obj =>
    obj.id == 3
);
products.splice(index, 1);
// console.log(products)



let cart = [
    { name: "Mobile", price: 15000, qty: 1 },
    { name: "Headphones", price: 2000, qty: 2 }
];

function getCartSummary(cart) {
    return {
        totalItems: cart.reduce((sum, item) => sum + item.qty, 0),
        totalPrice: cart.reduce((sum, item) => sum + item.qty * item.price, 0)
    };
}

/// Add item
cart.push({ name: "Laptop", price: 30000, qty: 1 });

// Update quantity
// case 1: whern know the item name, id or detail...
let proToUpdate = cart.find(item=>{
    return item.name == "Mobile";
})
if(proToUpdate) proToUpdate.qty = 3;


// case 2: when we to update for all with same quanttity  
cart.forEach(item => {
    if (item.qty === 1) item.qty = 3;
  });
  

// Remove item
let item = cart.findIndex(item =>
    item.name == "Headphones"
    );
cart.splice(item, 1);
console.log(item)

// Empty cart
cart.length =0;
console.log(cart)
