/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */
type Student = {
    studentId: string;
    fullName: string;
    age: number;
};

const student1: Student = {
    studentId: "ST2026045",
    fullName: "Nadia Putri",
    age: 16,
};

const student2: Student = {
    studentId: "ST2026044",
    fullName: "Aryan Pambudi",
    age: 15,
};

const student3: Student = {
    studentId: "ST2026043",
    fullName: "Budi Santoso",
    age: 17,
};

console.log(student1);
console.log(student2);
console.log(student3);