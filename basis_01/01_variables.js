const accountId = 28092006;
let Email = "vivek@gmail.com";
var accountPass = "vivek@123";

//accountId = 26082005;
Email = "mahi@gmail.com";
accountPass = "mahi@123";
let accountState;

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, Email, accountPass, accountState]);