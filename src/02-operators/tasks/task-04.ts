/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

const mechanicalKeyboardPrice: number = 850000
const WirelessMousePrice: number = 275000
const mousePadPrice: number = 120000

let mechanicalKeyboardQuantity: number = 1
let wirelessMouseQuantity: number = 2
let mousePadQuantity: number = 1

let subtotal: number = mechanicalKeyboardPrice*mechanicalKeyboardQuantity+WirelessMousePrice*wirelessMouseQuantity+mousePadPrice*mechanicalKeyboardQuantity
let finalTotal: number = subtotal>1000000 ?  subtotal-100000 : subtotal

console.log("subtotal: ", subtotal)
console.log("final price: ", finalTotal)