/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type Books = {
    ISBN: number;
    title: string;
    authorName: string;
    totalPage: number;
    bookCategory: string;
    available: boolean;
};

const book1: Books = {
    title: "The Very Hungry Caterpillar",
    ISBN: 399226907,
    authorName: "Eric Carle",
    totalPage: 26 ,
    bookCategory: "Kids book",
    available: true,
};

const book2: Books = {
    title: "The Long-Lived King",
    ISBN: 1368104541,
    authorName: "Dana Terrace",
    totalPage: 123,
    bookCategory: "Magical",
    available: true,
};

const book3: Books = {
    title: "The Killer Isn't Alice",
    ISBN: 8249388331,
    authorName: "Iris Starling",
    totalPage: 211,
    bookCategory: "Mystery",
    available: true,
};


console.log(book1);
console.log(book2);
console.log(book3);