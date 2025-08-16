/*
Primitive
7 types => String, Number, Boolean, null, undefined, Symbol, BigInt

Reference (Non-Primitive)
Array, Object, Functions

*/

//Dynamically Typed Language 
//kyuki wo runtime me datatype define karti hai 

const score = 100 ;
const scoreValue = 100.3;
console.log(score == scoreValue);

const id = Symbol("123");
const id1 = Symbol("123");
console.log(id === id1);

// Reference (Non-Primitive)
// Array, Object, Functions

let array = ["String","Number","Boolean","null","undefined","Symbol","BigInt"];

let obj = {
    name:"Vivek",
    age:19,
};

function fun(){
    console.log("Hello");
}

fun();