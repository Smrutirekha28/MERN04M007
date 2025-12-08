

//.................higher order function..........................
// it is a function which is accepting a function as a parameter and it is returning a function

let add=(a,b)=>{
    console.log("addition",a+b);
    
}
// add(10)//addition NaN
// add(10,20)

// let add=(a,b=40)=>{
//     console.log("addition",a+b);
    
// }
// add(10)//50



//for accepting


let hof = function(fun){
    //console.log(fun);//()=>{ console.log("this is a argument func");}
    fun()//this is a argument func
}
hof(()=>{console.log("this is a argument func");}) // it is known as argument function bcz this function is used as argument at the time of callinng




 //for returning

let returnHof = function(){
    let child = function(){
        console.log("this is a child function");
        return 10;
    }
    return child;
}
//returnHof()()//this is a child function
let childFunReturnValue = returnHof()()
console.log(childFunReturnValue);//this is a child function 10




//IIF(immdiate invoke(calling) function)
(function()//declaration
{
    console.log("IIF function");
    return ()=>{console.log("nested fun");
    }
})
//()//calling and the output is IIF function
()()//IIF function nested fun





//------------Array specific method----------------------
//->forEach,map,filter,reduce,find,some,every,sort(only use in iterable(the value which is store in indexing format) statement)


//------------forEach ------------
//it only iterate the array
//accept the callback function(3parameter {1.value, 2.index,3.array})
//forEach method is work like for loop and the diff is for is a loop and forEach is a method
//it does not return anything and it gives the output only in console
//it work only in array 
let arr = [1,2,3,4,5]

// for(let v of arr){
//     console.log(v);
    
// }

//or

arr.forEach((v,i)=>{
    console.log(i,"value",v);
    
})




//-----------------map---------------------
//accept callback function
//it return array
//if we want to update the value map method is used
//it does not change the original array

let newArr = arr.map((v)=>{
    return v+2;//for update
})
console.log(newArr);//[3, 4, 5, 6, 7]


//--------------filter---------------
//accept callback function
//it return array
//filter the data
//it does not change the original array

let filterArr = arr.filter((v)=>{
    return v%2==0;
})
console.log(filterArr);
 
 

//--------------reduce-------------------
//accept callback function
//index(accumulator,each element of array,initialise value)
//store single value

let additionValue = arr.reduce((sum,v)=>{
    return sum+=v;
},0)//sum = 0
console.log(additionValue);//15


let mult= arr.reduce((mult,v)=> mult * v,1);
console.log(mult);//120

