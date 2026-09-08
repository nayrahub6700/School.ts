/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

const friedRicePrice: number = 18000
let friedRiceQuantity: number = 3
const waterBottlePrice: number = 10000
let waterBottleQuantity: number = 2
let discountEligible: boolean = true
const discountAmount: number = 10000

let total: number = waterBottlePrice*waterBottleQuantity+friedRicePrice*friedRiceQuantity
let grandTotal = discountEligible === true ? total - discountAmount : total;

console.log("Total food price: ", friedRicePrice*friedRiceQuantity)
console.log("Total drinks price: ", waterBottlePrice*waterBottleQuantity)
console.log("Total: ", total)
console.log("Final total: ", grandTotal)