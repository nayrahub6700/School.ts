/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */
const roomPrice: number =  650000
let nights: number = 4
let vipMember: boolean = true
let service: number = 120000

const subtotal: number = roomPrice*nights
const vipTotal: number = vipMember? subtotal-subtotal*0.12 : subtotal
const finalTotal: number = vipTotal+vipTotal*0.11+service

console.log("subtotal: ", subtotal)
console.log("2ndTotal: ", vipTotal)
console.log("final total: ", finalTotal)
