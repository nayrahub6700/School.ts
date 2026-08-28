/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type products = {
    productCode: string;
    productPrice: number;
    productName: string;
    productStock: number;
    productWeight: number;
    rating: number;
    discount: boolean;
};

const product1: products = {
    productCode: "A1-04",
    productPrice: 8600,
    productName: "Apple",
    productStock: 123,
    productWeight: 180,
    rating: 8/10,
    discount: false,
};

const product2: products = {
    productCode: "A8-08",
    productPrice: 3000,
    productName: "NoteBook",
    productStock: 43,
    productWeight: 250,
    rating: 9/10,
    discount: false,
};

const product3: products = {
    productCode: "A8-10",
    productPrice: 15000,
    productName: "ToyCar",
    productStock: 39,
    productWeight: 45,
    rating: 9/10,
    discount: false,
};


console.log(product1);
console.log(product2);
console.log(product3);