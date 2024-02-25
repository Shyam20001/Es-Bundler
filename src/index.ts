import { add } from "./imports/im";

// Define a simple function to add two numbers
function add1(a: number, b: number): number {
    return a + b;
}

// Test the function 
const result1 = add(5, 3); // Using the imported 'add' function
console.log("Result from imported add function:", result1);

const result2 = add1(5, 3); // Using the locally defined 'add1' function
console.log("Result from locally defined add1 function:", result2);

console.log(`hello mutta pundais kabnali`);
console.log('hellow');

import exp, { json } from 'express' 
const app = exp()          
app.use(json)