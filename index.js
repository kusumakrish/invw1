//Difference between “ == “ and “ === “ operators.
 
//these are comparison operators

//"=="is used to compare the values

console.log(a==a);

//"===" is used to compare the value and database.
console.log(a==="a");

//What is the spread operator?

//it is ES6 new set operators.It takes an array and expands it into individual elements.
//spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
//eg:

let js = ["function","array","object"];
console.log(...js);


//What are the differences between var, let and const?

//var - *It is a Global scope
//      *It can be reassigned or redeclared.
//      *It can be modified later.

var a = 2;
console.log(a);
a = 7;

//let - *It is a block scope
//      *It cannot be redeclared or reassigned.
//      *It can be modified later.

let name1; 
name1 ="supriya";
console.log(name1);
name1 = "prabu"


//const - *It is a block scope.
//      *It cannot be redeclared or reassigned.
//      *It cannot be modified later.

const city = "coimbatore";
console.log(city);
//What is execution context

//it contains two phases : creation phase and execution phase: creation phase: allocate memory to variables & function definitions are allocated to name of functions , exact values are not assigned to variables instead default value undefined is assigned to all variables.
//execution phase: exact value for the variable will be overwritten and undefined will be removed. function body is now executed once function is called.
//after execution phase both global & function execution context gets removed from call stack.

//What is meant by first class functions
//
//n Javascript, functions are first class objects. First-class functions means when functions in that language are treated like any other variable.
//Function which gets treated as a variable.It can be passed as an argument to other functions,can be returned by another function and can be assigned as a value to a variable.
//First class function or first class citizen.
//the function that can be passed as value or return the function as a value. This unique feature is called FCF.
let g = function(param){ //HOF
    console.log("i am fn g");
    console.log(param);
    param();//callback fn
}

function h(){ //FCF
    console.log("i am fn h");
}

g(h);// h is a function passed as an argument.


//What are closures?
//closures - closure is not something that we create manually or explicitly it happens automatically in certain situation which we need to recognize.
//closure makes a function remember all the variable that existed at the function birthplace initially.
//any function always has access to variable environment of the execution context in which the function was created.

const ticketBooking = function(){
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log(`the passenger count is ${passengerCount}`)
    };
};

const bookie = ticketBooking()
bookie();
bookie();
bookie();
bookie();
