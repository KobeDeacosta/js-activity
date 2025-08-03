// Starter data
const cart = [
  { name: "Pen", price: 20, quantity: 3 },
  { name: "Notebook", price: 50, quantity: 2 },
  { name: "Pencil", price: 10, quantity: 5 }
];

// Start coding here...

// 1. Calculate total price for each item (price * quantity)
const itemTotals = cart.map(item => ({
  ...item,
  total: item.price * item.quantity
}));
console.log("Item Totals:", itemTotals);

// 2. Generate new array of item descriptions (e.g., "Pen - ₱20")
const itemDescriptions = cart.map(item => `${item.name} - ₱${item.price}`);
console.log("Item Descriptions:", itemDescriptions);

// 3. Compute the total cart value using reduce()
const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
console.log("Total Cart Value: ₱" + cartTotal);