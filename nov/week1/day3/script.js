//1.write a program to count the number of vowels in a string
let str = "enter anything";
let vowel = ["a","e","i","o","u","A","E","I","O","U"];
let vowelCount=0;
for(let v of str){
    if(v===vowel){
        vowelCount++;
        
    }
}console.log(vowelCount);


// 2.reverse a string without using built-in reverse method
let originalString= "this is qlith innovation";
let reverseString ="";
for(let i=originalString.length-1;i>=0;i--){
    reverseString+=originalString[i];
    
}console.log(reverseString);




//3.check if a string is palindrome or not
if (originalString === reverseString) {
    console.log("palindrom");
    
}else{
    console.log("not palindrom");
    
}



//convert the first letter of each word in a sentence to uppercase
let sentence="hello world";
let strArr = sentence.split(" ");
const afterConvertArr="";
for(let v of strArr){
     v.at(0).toUpperCase();
    
    
}


//6.replace all spaces in a string with -
let str1="Hello World "
console.log(str1.replaceAll(" ","-"));

//7.Extract the first 5 characters of a string
let str2 ="Hii Everyone";
console.log(str2.slice(4, 9));


//8.Concatenate 2string without using + or template literal
console.log("Hii! " .concat("Oh, No"));


//10. Replace all occurance of "java" with "python" in I love java java
let str10 = "I love java java";
console.log(str10.replaceAll("java","python" ));

//12.Convert a string like "hello_world" to "Hello World"
let str12= "hello_world";
console.log(str12.replace("_"," "));


//15. Convert a string "hello" into "h-e-l-l-o"
let str15="hello";
console.log(str15.replaceAll("hello", "h-e-l-l-o"));



//13.count the number of words in a string(words separated by spaces)
let str13="Hii everyone! Welcome to my world";
console.log(str13.split(" "));


//9
let checkString="hello my coding world";
let splitString = checkString.split(" ");
if(splitString[0]==="hello" && splitString[splitString.length-1]==="wold"){
    console.log("true");   
}else{
    console.log("false");
    
}


//11
let sentence1 = "JavaScript is a powerful programming language";
let words = sentence1.split(" "); 

let longest = ""; 
for (let v of words) {
  if (v.length > longest.length) {
    longest = v;
  }
}

console.log("The longest word is:", longest);