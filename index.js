// // Difference between == and ===

//These are comparison operators

let num1 = 2;
let num2 = "2";

// // == : checks only the both the values are same or not.

console.log(num1 == num2)//true

// //=== : checks both datatypes and values are same or not.

console.log(num1 === num2)//true

// //2. What is the spread operator?
// //A.  Spread operator will define as ... it allows iterable expand in place where 0+ arguments are expected. it will use for arrays where more than one element

// let fruits = ["apple","mango","banana"];
// console.log(...fruits);

// //3. What are the differences between var, let and const?
// // var: var has a global scope. var can be intilized in one line and can be assigned in another line. var can be redeclered and reintilized.
// // Let: let has a local scope. let can be intilized in one line and can be assigned in another line. let cannot be reclered but can be re intilized.
// // const: const has a local scope. const cannot be relintilized and cannot be redeclered.
{
    var i=0;
    let s=2;
    const c = 4;
}
console.log(i);//0
console.log(s);//Reference Error : s Not defined
console.log(c);//Reference Error : c Not defined

// //4. What is execution context?
// //execution context : execution context has two phases 1. creation phase 2. execution phase
// //creation phase : In this phase intrepreter creates the memory for the variables and creates a function expression.
// //Execution phase : In this phase interpreter will executes the code that currently running. it allocates the actual values to the variables by removing undefined.

// //5. What is meant by first class functions?
// //first class function : the function that can be passed as value or return the function as a value. This unique feature is called FCF's first class functions or first class citizens.

function sayHi(friend){
    console.log("Hi",friend);
}

function friends(friend,FCF){
    FCF(friend);
}

friends("bala",sayHi);

//Here sayHi is the First class function / first class citizens.
//Here friends is the higher order function.
 
// //6. What are closures?
// //closures are functions that references variables in the outer scope from its inner scope.
//  let outerfn = () => {
//      let count=0;
//      return innerfn = () => {
//          console.log(count++);
//      }

//  }
// let sk = outerfn();
//  sk();
//  sk();
//  sk();
