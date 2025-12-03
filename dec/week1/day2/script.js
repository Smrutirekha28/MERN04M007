// then
// =========
// it accept a callback function
// when the promise is in resolve and pending condition at  that time  to handel it "then" is used


// catch
// =========
// it accept a callback function
// when the promise is in reject condition at  that time  to handel it "catch" is used

// let getData = function(value){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("value",value);
//             // resolve("succcessfully data fetched");
//             reject("some error")
            
//         },2000)
//     })
// }
// getData(1).then((res)=>{
//     getData(2).then(()=>{
//         getData(3)
//     })
// }).catch((res)=>{
//     console.log(res);
    
// })




//fetch method
// =========
//by default  accept get request  
//return the data
// when you asked any request in fetch method , first it give the pending promises
//it is connect with the server
//it accept an API or address


// async 
//========
// it is a keyword which is used to create a asynchronous block
//used to handel promises

//await
//======
//it work like synchronous 
//it is a keyword which is used for waiting the same statement 
//used to handel promises
//inside the async block await block is always used



//server gives response object and  JSON() is used to convert the data in javascript object



let getData = async function () {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts");
    // data.then((res)=>{
    //     let result = res.json();
    //     result.then((res) =>{
    //         console.log(res);
            
    //     })
    // })

    //or

    let objData = await data.json();
    console.log(objData);
    
}
getData()


// request
// ==============
// it is a Object
// 4 types
//      -> get  ->fetching the data
//     ->create (post)  ->creating the data
//     ->update(put)   ->updating the data
//     ->delete     ->delete the existing data
//these goes under http request