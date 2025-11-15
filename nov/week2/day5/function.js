console.log("We are going to learn function");


//Types



//.............................Anonymous function............................
//function(){}//declaration

//declaration->function key word,(),implementation

// function(){
//     //any statement
// }



//..............................named function.................................
//declaration->function key word,function name,(),implementation

function F1(){
    console.log("my f1 is executing");
    console.log(typeof F1);//function
    
}
F1()//caling part

console.log(F1);//print the whole function name and the statement present inside it
//if we declare 1 variable name in 2 function it does not give any error and it shows the output because it take the function like var keyword
//And it work like hoisting
function F1() {
    console.log("second function");
    
}F1();




//.......................expressional function....................
//it takes an assignment operator
//the variable will store the function
//in the left side we will declare a variable and in the right side it will store the anonymous function
//declaration => keyword(let,const,var), variable , assignment opertor(only "="),anonymous function
let F2 = function(){
    console.log("expressional function");
    
}
F2();//calling
console.log(F2);


let print = function(value,v){//parameter is by default store in var keyword
    console.log("value :",value);//value : undefined and after giving the argument in the calling part it give the output as value : 30
    console.log("value :",value,v);//value : 30  [1, 2, 3]
    
}
print(30)//argument
print(30,[1,2,3,])






//...............nested function.............................
let parent = function(){
    // console.log("parent ");
    
    let a = 10;
    let child= function(){
        let b= 30;
        console.log("addition" , a+b);
        let child1= function(){
            console.log("child1");
            
        }
        return child1;//return statement must be last statement
    }
    //child()//addition 40
    return child
}
//parent()//parent
//parent()()//addition 40
//parent()()()//child1

//console.log(parent);//give the parent function
// console.log(parent());//give the child function
// console.log(parent()());//give the child1 function



let returnFun=function(){
    console.log("before return");
    let obj={
        name:"xyz",
        age:20
    }
    return obj;
}
let value=returnFun()
console.log(value);




//.....................arrow function.....................
let arrowFun=()=>{
    console.log("this is a arrow function");
    
}
arrowFun(); //this is a arrow function



let arrowFunction=(a,b)=>{
    let sum = a+b;
    let sub = a-b;
    
    return sum;
       
}
console.log(arrowFunction(10,20))



let allOperation=(a,b,op)=>{
//     if(op === "+"){
//         return a+b;
//     }
//     else if(op === "-"){
//         return a-b;
//     }
//     else if(op==="*"){
//         return a*b;
//     }
//     else if(op === "/"){
//         return a/b;
//     }
//     else if(op === "**"){
//         return a/b;
//     }
//     else if(op === "%"){
//         return a/b;
//     }
//     else{
//         return "invalid symbol"
//     }

    return eval(`${a} ${op} ${b}`)
}
console.log(allOperation(60,20,"+"));
console.log(allOperation(60,20,"-"));
console.log(allOperation(60,20,"*"));
console.log(allOperation(60,20,"/"));




