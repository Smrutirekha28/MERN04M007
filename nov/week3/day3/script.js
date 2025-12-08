
console.log("today we are going to learn array method");


//array  method
//every()
//->accept call back function
// ->return boolean type
// ->check every element
// ->if all element satisfied  the condition then it return true otherwise return false

let arr = [1,2,3,4,5]
let isGreater = arr.every(v=>{
    return v>0
})
console.log(isGreater);//true



//some()
// ->if one eleent statisfy the condition it will return true
// ->accept a callback function
//return boolean value

let arrr=[-9,1,2,3,4,-5]
let isGre = arrr.some(v=>{
    return v>0
})
console.log(isGre);//true 


//find
//it will first go to array then check the element , when the condition is satisfied at that time it return the value value and dont go forward
// ->accept a callback function
//return the value
let value  = arr.find(v=>{
    return v===2;
})
console.log(value);//2



let lastValue = arr.findLast((v,i)=>{
    console.log("idx",i);
    return v===2;
    
})
console.log(lastValue);


//check if all number are even
let nums = [2,4,6,8,9]
let isEven =nums.every(v=>{
    return v%2==0
})
console.log(isEven);//false


//check all the elements length is 3 or not
let fruits = ["apple","banana","watermelon"]
let lengthArr = fruits.every(v=>{
    return v.length > 3
})
console.log(lengthArr);//true



//check if all user are active(active=true)'
let users =[
    {name:"a",active:true},
    {name:"c",active:true},
    {name:"b",active:false}
]
let checkUser = users.every(v=>{
    return v.active === true
})
console.log(checkUser);



//check if all elements in an array are unique using only every()
let number = [1,3,2,4,5,2]
let uniqueArr = number.every((v,i)=>{
    return number.indexOf(v)===i
})
console.log(uniqueArr);


//check if all marks are above 40
let marks = [55,67,89,32]
let aboveMark= marks.every(v=>{
    return v>40
})
console.log(aboveMark);//false


//check if any product  is out of stock
let products =[
    {name:"pen",qty:10},
    {name:"peno",qty:0},
    {name:"peon",qty:10}
  
]

let outArr = products.some(v=>{
    return v.qty ===0
})
console.log(outArr);

//Set
//it remove duplicates automatically



//find() practice
// find the first user with admin = true

let listOfUser =[
    {name:"A",admin:false},
    {name:"b",admin:true},
    {name:"c",admin:false}
]
console.log(listOfUser.find(v=>v.admin==true));



//sort()
let numArr = [1,2,3,4,5,25,6,90];
console.log(numArr.sort((a,b)=>b-a));//[90, 25, 6, 5, 4, 3, 2, 1]
console.log(numArr.sort((a,b)=>a-b));//[1, 2, 3, 4, 5, 6, 25, 90]





//Math
//properties
console.log(Math.PI);//3.141592653589793
console.log(Math.SQRT2);//1.4142135623730951 root of 2
console.log(Math.SQRT1_2);//root of 1/2
console.log(Math.LN2);//log2
console.log(Math.LN10);//log10
console.log(Math.LOG2E);//log2 base e
console.log(Math.LOG10E);//log10 base 10


//functon
//method
console.log(Math.max(1,2,3,90));//90
console.log(Math.min(1,45,3,5,0.5));//0.5
console.log(Math.round(1.200));//1
console.log(Math.floor(4.9));//it retun just less value of given value//4
console.log(Math.ceil(4.2));//5//it retun just greater value of given value
console.log(Math.ceil(4));//4
console.log(Math.random());//give any number between >0 and <1
console.log(Math.pow(2,3));//power //2 power 3 //8
console.log(Math.sqrt(40));//square root //6.324555320336759
console.log(Math.cbrt(8));//cube root //2
console.log(Math.abs(2.39));//2.39






let obj={
    name:"qlith",
    age:20,
    phone:9692500650
}
obj.name="inno"
console.log(obj);//{name: 'inno', age: 20, phone: 9692500650}
console.log(Object.values(obj));//['inno', 20, 9692500650]
console.log(Object.keys(obj));//['name', 'age', 'phone']
console.log(Object.entries(obj));//it take an object and gives each entry as a array ['name', 'inno'], ['age', 20],['phone', 9692500650]

console.log(Object.fromEntries([[1,2],[3,4],[6,7]]));//{1: 2, 3: 4, 6: 7} //it take an array and give the output as a object




delete obj.phone
console.log(obj);//{name: 'inno', age: 20}// remove the phone and it change the original object


Object.freeze(obj)//the work of freeze is if anyone want to update the value of object it is impossible
obj.age = 40
console.log(obj);//{name: 'inno', age: 20}




let x ={
    a:1
}
let y ={
    b:2
}
console.log(Object.assign(x,y));//it assign the object y inside x  //{a: 1, b: 2}















