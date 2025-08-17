
let name = "vivek", repoCount = 5;

console.log(name + " repo count value" + repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Vivek Chavhan");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.indexOf("k"));

console.log(gameName.substring(0,3));

const nikname = gameName.slice(1,3);
console.log(nikname);
// nikname = gameName.slice(-3, 2);
console.log(gameName.slice(-4,5));


const newString = "     Mahi ";
console.log(newString);
console.log(newString.trim());


const url = "http://mahivivek@gmail.com";
console.log(url.replace("vivek",""));

console.log(url.includes("vivek"));

console.log(gameName.split("a"));
console.log(gameName);