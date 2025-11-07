console.log("Today we are going to learn Arrays");
// two ways
// ->literal format
// ->object creation
let arr=[[0,[9,8]],2,3,4];
console.log(arr)

let newArr=new Array(5,6,7,8);
console.log(newArr)

// Access
console.log(arr[0])
console.log(newArr[0])

console.log(newArr)


let afterAddingArr=Array.of(arr,newArr,"jksdja",80)//store ONE ARRAY in another array
let firstIdxArr=afterAddingArr[0];


console.log(afterAddingArr[0][0][1][0]);
console.log("-------------------------")

let numArr=[1,2,3,4,5];
for(let i=0;i<=numArr.length-1;i++){
    console.log(numArr[i])
}

let markArr=[85, 97, 44, 37, 76, 60];
let sumOfArr=0;
for(let i=0;i<=markArr.length-1;i++){
       sumOfArr=sumOfArr+markArr[i];
} 
console.log("Avarage value :",sumOfArr/markArr.length)


let itemsArr=[250, 645, 300, 900, 50]
let sumOfPercentItems=0;
for(let itemValue of itemsArr){
    let add10Percent=itemValue-(itemValue*0.10);
    sumOfPercentItems+=add10Percent;
}

console.log(sumOfPercentItems);

