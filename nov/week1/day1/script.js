console.log("today we are going to learn string");

let str1="first string";
let str2='second string';
let str3=`third sting`;
console.log(str1);
console.log(str2);
console.log(str3);




let str="hello";
console.log(str);
console.log(str[1]);

str[0]="s";
console.log(str);


let strObj = new String();// new String() is a object and here strObj store the object of a string


//method to get the value from String object

let strobj= new String("Bye");
console.log(strobj.valueOf(String))
console.log(strobj.valueOf()[0]);



//string variable
//string method
//property of string is length 
//property means variable

console.log(str.length)


//string method
console.log(str.toUpperCase());
console.log(str.toLowerCase());




//template literal
let nameStr = "brand bacardi";
console.log(nameStr+" limon");
console.log(nameStr);//brand bacardi
console.log(nameStr,30);//brand bacardi 30 (here 30 is the number)
console.log(nameStr+ 30);//brand bacardi30 (here 30 is the string)

//interpolation
// let ml = 50;
 let ml=60;
console.log(`brand bacardi ${ml}ml`)
