console.log("today is the second part of the loop");


let a=[];
let b=a;
console.log(a==b);

console.log(0==undefined);//false

let arr=[1,2,3,4,5];
for(let i=0;i<=arr.length-1;i++){
    console.log(i+":" ,arr[i]);
    
}

//or

for( let i in arr){
    console.log(arr[i]);
    
}


let obj={
    name:"tunguru",
    age:30,
    email:"tunguru@gamil.com",
    password:12345
}
for(let key in obj){
    // console.log(obj.key);//it is direct access output undefined
    // console.log(obj[key]);//it is dynamic access  output all the obj value
    console.log(key, obj[key]) ;
    
}


for(let value of obj.email){
    console.log(value);// string also an array
    
}



let objj={
    arr:[6,7,8,9]
}
for(let v of objj.arr){
    console.log(v);
    
}



let numArr=[1,2,3,4,5,6];
for(let v of numArr){
    if(v==5){
        break;
    }
    console.log(v);//1 2 3 4 
    
}

let numArrr=[1,2,3,4,5,6];
for(let v of numArrr){
    if(v==5){
        continue;
    }
    console.log(v);//1 2 3 4 6
    
}



const stdObj={
    fullName: "Rojalin",
    phn:89458994,
    email:"abcd@gmail.com"
}

console.log(stdObj.fullName);
stdObj.fullName="samir";//re-initialisation
console.log(stdObj.fullName);

// stdObj={
//     fullName: "saaaa"
// }

// console.log(stdObj.fullName);//TypeError: Assignment to constant variable.
