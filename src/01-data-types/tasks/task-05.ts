/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type attendanceRecord = {
    employeeID: string;
    employeeName: string;
    date: string;
    checkinTime: string;
    chekouttime: string;
    totalHour: number;
    present: boolean;
};

const employee1: attendanceRecord = {
    employeeID: "XIR-004",
    employeeName: "Aryan Syarif",
    date: "15/08/2026",
    checkinTime: "05:45",
    chekouttime: "17:00",
    totalHour: 11.25,
    present: true,
};

const employee2: attendanceRecord = {
    employeeID: "NEE-034",
    employeeName: "Bartholomew Waffleton",
    date: "15/08/2026",
    checkinTime: "08:30",
    chekouttime: "21:00",
    totalHour: 12.30,
    present: true,
}

const employee3: attendanceRecord = {
    employeeID: "NEE-091",
    employeeName: "Zorp McSnibble",
    date: "15/08/2026",
    checkinTime: "",
    chekouttime: "",
    totalHour: "",
    present: false,
}

console.log(employee1)
console.log(employee2)
console.log(employee3)