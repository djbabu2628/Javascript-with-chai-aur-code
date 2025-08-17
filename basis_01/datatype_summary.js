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



//+++++++++++++++++++++++++++++++++++++++++++++ Stack and Heap Memory ++++++++++++++++++++++++++++++++++++++++++++++++


//nikname name ka duplicate bana ke uski value print kar rha hai agar hamne nikname ko change kiya to name waise ka waise hi rahega 
let name = "vivek";
let nikname = name;
nikname = "babu";

console.log(name,nikname);




let obj1 = {
    email:"viveksunilchavhan@gmail.com",
    upi:"vivek@ibl"
};

let obj2 = {
    email:"babu@gmailcom",
    upi:"babu@ibl"
};

//here obj3 ye obj1 ka address save kar raha hai iske wajah se jab ham obj3 main change karte hai to obj1 bhi change hota hai
obj3 = obj1;

obj3.email = "vivek2sunilchavhan@gmail.com";
console.log(obj1, obj2, obj3)
