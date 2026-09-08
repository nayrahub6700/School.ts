/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

const previousMeter: number = 25640
const currentMeter: number = 25892
const electricityPrice: number = 1650
const solarPanel: boolean = true
const energySavingMode: boolean = false

const totalConsumption: number = currentMeter-previousMeter
const bill: number = totalConsumption*electricityPrice
const solarDiscount: number = solarPanel? bill*0.2 : 0
const energySavingDiscount: number = energySavingMode? bill*0.05 : 0
const finalBill: number = bill-solarDiscount-energySavingDiscount
const greenEnergyProgramEligibility: boolean = solarPanel && totalConsumption<300 && energySavingMode

console.log("Total Energy Consumption: ", totalConsumption)
console.log("Electricity Bill: ", bill)
console.log("Solar Discount: ", solarDiscount)
console.log("Energy Saving Discount: ", energySavingDiscount)
console.log("Final Bill: ", finalBill)
console.log("Green Energy Program Eligibility: ", greenEnergyProgramEligibility)