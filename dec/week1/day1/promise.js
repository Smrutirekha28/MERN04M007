
//asynchronous , synchronous
// console.log("first line");

// setTimeout(()=>{
    //     console.log("second line");
    
// },5000)//5000 means 5sec
// console.log("third line");


//callback hell
//->one method is call inside another method i.e called as hell
// let getData = function(value,func){
//     setTimeout(()=>{
//         console.log("value",value);
//         func()
//     },3000)
// }
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4,()=>{
//                 getData(5)
//             })
//         })
//     })
// });




// promises
// =============
// handling part
//->it is a object
//conditions are
//  ->pending(the server is working or fetching the data from the backend)
//  ->resolve(successfully fetched the data)
//  ->reject(could not fetch successfully)

// let promise = new Promise((resolve,reject) =>{
//     // resolve("sucess")//Promise {<fulfilled>: 'sucess'}
//     // pending("pending")
//     // reject("reject")//error // Promise {<rejected>: 'reject'}
// })
// console.log(promise);




//  let getData = function(value,func){
//     return new Promise((res, rej)=>{
//            setTimeout(()=>{
//             res("success")
//             console.log("value",value);
//             func()
//         },2000)

//     })
// }
// console.log(getData(1));



//spred operator(...)
//spread the thing which is in compressed
let arr1 = [1,2,3]
let arr2 = [5,6,7]
let spreadValue = [...arr1,...arr2]
console.log(spreadValue);//[1, 2, 3, 5, 6, 7]


let obj1 = {
    x:2
}
let obj2={
    y:3
}
let spreadObject = {...obj1,...obj2}
console.log(spreadObject);//{x: 2, y: 3}


//rest(...)
//the operator or parameter must be present in last (if used in first it gives error)
//compressed or rest the thing which is in spread condition
//opposite of spread
let restFunction = (first,...arg)=>{
   
    console.log(first);
    console.log(arg);
    
    
}
restFunction(1,2,34,5,6)