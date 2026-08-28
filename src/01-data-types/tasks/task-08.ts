/**
 * The school's Smart Greenhouse system automatically records the air temperature every hour from 08:00 until 15:00. 
 * Instead of storing each temperature in a separate variable, the developer wants to store all temperature readings in a 
 * single collection so they can easily calculate the highest, lowest, and average temperature later.
 * Today, the recorded temperatures are:
 * 
| Time  | Temperature (°C) |
| ----- | ---------------- |
| 08:00 | 24.5             |
| 09:00 | 25.1             |
| 10:00 | 26.8             |
| 11:00 | 28.4             |
| 12:00 | 30.2             |
| 13:00 | 31.1             |
| 14:00 | 30.7             |
| 15:00 | 29.3             |

 * Task:
 * 
 * 1. Define a proper type for the temperature information.
 * 2. Store the temperature data in a single collection.
 * 3. Display the temperature data using console.log.
 */

type temperatures = {
    t0800: number,
    t0900: number,
    t1000: number,
    t1100: number,
    t1200: number,
    t1300: number,
    t1400: number,
    t1500: number,
}

const temp: temperatures = {
    t0800: 24.5,
    t0900: 25.1,
    t1000: 26.8,
    t1100: 28.4,
    t1200: 30.2,
    t1300: 31.1,
    t1400: 30.7,
    t1500: 29.3,
}

console.log(temp)