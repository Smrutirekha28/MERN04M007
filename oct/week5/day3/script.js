console.log("today is the 2nd class of operator");

let num1=2;
let num2=3;
console.log(num1+num2 /2*4);//8
console.log({} == {});//false
console.log([]==[]);//false

console.log(undefined == undefined);//true
console.log(null == null);//true
console.log(undefined == []);//false

console.log(false || "it is true");



// if(condition){
    //statement
//}
if(true)
    console.log("true");
console.log("false");

console.log(false ? "it is true":"it is false");

if (1) {
    console.log("hii");
    
}
if (null) {
    console.log("hii");
    
}
if (undefined) {
    console.log("hii");
    
}

let a =2;
if ((a<1)&&(a++<4)) {
    console.log(a);
    
}else{
    console.log(a);//2
    
}




// const num = prompt("Enter any number");
// if(num%5==0){
//     console.log("it is multiple of 5");
    
// }else{
//     console.log("not multiple of 5");
    
// }



const stdMark = prompt("Enter student mark");
if(stdMark>80 && stdMark<=100){
    console.log("grade A");
    
}else if(stdMark>70 && stdMark<=80){
    console.log("grade B");
    
}else if(stdMark>60 && stdMark<=69){
    console.log("grade C");
    
}else if(stdMark>50 && stdMark<=59){
    console.log("grade D");
    
}else if(stdMark>0 && stdMark<=49){
    console.log("grade E");
    
}else
    console.log("not a number");
    
