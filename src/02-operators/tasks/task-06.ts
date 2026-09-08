/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const hour: number = 7
const minute: number = 35
const totalMinute: number = hour*60+minute
const hourStarted: number = totalMinute/60 > hour? hour+1 : hour
const bill: number = hourStarted*8000 
const discountAmount : number = bill*0.15
const finalAmount: number = bill-discountAmount

console.log("subtotal: ", bill)
console.log("discount: ", discountAmount)
console.log("finaltotal: ", finalAmount)