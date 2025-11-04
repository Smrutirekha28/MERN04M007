console.log("today we are going to learn String method");
let str="hello";
console.log(str[0]);//h
//or
console.log(str.at(0));//h (used to get the indexing value)
//or
console.log(str.charAt(0));//h (used to get the indexing value)



//concat method
console.log("hello hii" + " tata bye");
console.log("Hii " .concat("Oh! No"));



//trim method(remove the extra space in starting and ending)
let str1=" Ql ith ";
console.log(str1.length);//7
console.log(str1.trim().length);//5
console.log(str1.trim());//Ql ith
console.log(str1.trimEnd());// Ql ith (only remove the end space not start space)
console.log(str1.trimStart())//Ql ith (only remove the start space not end space)


//replace method
console.log(str1.replace("l","L"));

let desc="this is my cat , his name is poppycat. my cat has to baby cat";
console.log(desc.replaceAll("cat","dog"));//this is my dog , his name is poppydog. my dog has to baby dog



//toString method
let num=20;
console.log(num.toString());//20
console.log(typeof num.toString());//string

//slice method
let string = "this is qlith office"
console.log(string.slice(2));//is is qlith office
console.log(string.slice(2,6));//is i
console.log(string.slice(4,2));//empty 
console.log(string.slice(2,3));//i
console.log(string.slice(2,2));//empty
console.log(string.slice(-4,-2));//fi
console.log(string.slice(-4,-8));//empty


//split method
let strArr =string.split(" ");
console.log(strArr);//['this', 'is', 'qlith', 'office']

let strArrr =string.split("t");
console.log(strArrr);//['', 'his is qli', 'h office']
