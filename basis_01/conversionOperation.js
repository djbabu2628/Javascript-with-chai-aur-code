let score = 23;

console.log(score);
console.log(typeof score);

score = null;
console.log(score)
console.log(typeof (score));

let valueInNumber = Number(score);

console.log(valueInNumber);
console.log(typeof valueInNumber);

valueInNumber = "123@jg";

console.log(valueInNumber);
console.log(typeof valueInNumber);

//"33" => 33
//"33abc" => NaN
//true => 1 /false => 0


isLoggedIn = 1;
isLoggedOut = 0;

console.log([isLoggedIn, isLoggedOut])

let booleanInloggedIn = Boolean(isLoggedIn); booleanInloggedOut = Boolean(isLoggedOut)

console.log([booleanInloggedIn, booleanInloggedOut])

let isName = "Vivek";
let isAge = 19;
let isNull = null;
let isOwn

console.log([isName, isAge, isNull]);

let isNameb = Boolean(isName);
let isAgeb = Boolean(isAge);
let isNullb = Boolean(isNull);
let isOwnb = Boolean(isOwn);

console.log([isNameb, isAgeb, isNullb, isOwnb]);
