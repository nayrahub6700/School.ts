/**
 * An e-commerce platform is preparing a flash sale event. Before the discount calculation begins, 
 * the system temporarily stores several pieces of information as individual variables.
 * A customer wants to purchase a Mechanical Keyboard RGB with the product code KBR-001. 
 * The original price of the product is 850000 rupiahs, 
 * and the flash sale offers a 25% discount. The customer plans to buy 2 keyboards. 
 * Because the customer is a premium member, they are eligible for free shipping. 
 * The current stock available in the warehouse is 18 units.
 * 
 * Task:
 * 1. Identify every value that should become a variable.
 * 2. Choose an appropriate variable name for each value.
 * 3. Determine the correct data type.
 * 4. Declare all variables in TypeScript.
 * 5. Display the product data using console.log.
 */

const keyboardPrice: number = 850000;
const keyboardCode: string = "KBR-001";
let stock: number = 18;
const discount: number = 0.25;

const quanity: number = 2;

console.log("keyboard product code: ", keyboardCode);
console.log("keyboard price: ", keyboardPrice);
console.log("current stock: " , stock)
console.log("quanity:", quanity);
console.log("discount: ", discount);
console.log("final price: ", (keyboardPrice-(keyboardPrice*discount))*2);
stock = stock-quanity;
console.log("stock: " , stock);