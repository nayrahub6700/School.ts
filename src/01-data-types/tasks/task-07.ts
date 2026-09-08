/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type registration = {
    studentID: string;
    studentname: string;
    studentGradeLevel: number;
    courseID: string;
    courseTitle: string;
    courseInstructor: string;
    paymentStatus: boolean;
    learningHour: number;
    registrationDate:string
};

const student1: registration = {
    studentID: "XIR-004",
    studentname: "Aryan Syarif Pambudi",
    studentGradeLevel: 10,
    courseID: "TS-142836",
    courseTitle: "TypeScript Introduction",
    courseInstructor: "Ms Whyna",
    paymentStatus: true,
    learningHour: 73,
    registrationDate: "06/07/26"
};

const student2: registration = {
    studentID: "XIR-029",
    studentname: "Bartholomew Waffleton",
    studentGradeLevel: 10,
    courseID: "TS-141805",
    courseTitle: "HTML Basics - Images, Tables, and Multimedia Elements",
    courseInstructor: "Ms Pasha",
    paymentStatus: true,
    learningHour: 43,
    registrationDate:"10/06/26"
};

const student3: registration = {
    studentID: "XIR-029",
    studentname: "Bartholomew Waffleton",
    studentGradeLevel: 10,
    courseID: "TS-345678",
    courseTitle: "Python Programming Fundamentals",
    courseInstructor: "Mr Alex Johnson",
    paymentStatus: true,
    learningHour: 49,
    registrationDate:"09/17/26"
};

console.log(student1);
console.log(student2);
console.log(student3);