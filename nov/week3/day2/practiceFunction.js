console.log("practice question on array function")
/*let b=20;
let c=30; */  // multiline comment
// let a=10;  single line comment


// FOREACH
// --------------------
// Print each element of an array:
let nums = [10, 20, 30, 40];

// nums.forEach(v=>{
//     console.log(v)
// })

// Print each index + value of an array.
nums.forEach((v, i) => {
    console.log(i + v)
})

// Count how many elements in an array are even using only forEach.

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let count = 0;
numArr.forEach((v) => {
    if (v % 2 === 0) {
        count++
    }
})
console.log(count)


// Given ["apple", "banana", "mango"], print each fruit in uppercase using forEach.

let fruits = ["apple", "banana", "mango"];

fruits.forEach((v) => {
    console.log(v.toUpperCase());
})

// Add all elements of an array using forEach 

let sum = 0;
numArr.forEach((v) => {
    sum += v
})
console.log(sum)

// Create a new array that contains only the lengths of each string using forEach.

let storeLen = [];
fruits.forEach((v) => {
    storeLen.push(v.length)
})
console.log(storeLen)

// Using forEach, check how many times each item occurs:
// ["a", "b", "a", "c", "b", "a"]
let charArr = ["a", "b", "a", "c", "b", "a"]
let obj = {};

charArr.forEach((v) => {
    if (obj[v]) {
        obj[v] = obj[v] + 1;
    } else {
        obj[v] = 1
    }
})
console.log(obj)

// output obj={
//     a:3,
//     b:2,
//     c:1
// }

// Using forEach, create an object where key = number, value = number².

let sqObj = {}
numArr.forEach((v) => {
    sqObj[v] = v * v;
})
console.log(sqObj)


// map
// -------------
// Given [1, 2, 3, 4], return [2, 4, 6, 8].

let nArr = [1, 2, 3, 4];

let updateArr = nArr.map((v) => {
    return v * 2;
})

console.log(updateArr)

// Convert all strings to uppercase in ["red", "blue", "green"].

let uppercaseValue = fruits.map(v => {
    return v.toUpperCase()
})
console.log(uppercaseValue)

// From [10, 20, 30] return each element + its index. (e.g., 10+0 = 10, 20+1 = 21)

let upArr = [10, 20, 30].map((v, i) => v + i);
console.log(upArr)

// Given array of users:

// [
//   {name: "John", age: 20},
//   {name: "Mary", age: 25}
// ]

// Return only the names using map.

let objArr=[{name: "John", age: 20},{name: "Mary", age: 25}]

let nameArr=objArr.map((v)=>v.name);
console.log(nameArr);

// filter
// -----------
// Filter out even numbers from [1, 2, 3, 4, 5, 6].

let evenNoArr=[1, 2, 3, 4, 5, 6].filter((v)=>{
    return v%2==0;
})
console.log(evenNoArr)


// Given [0, 1, false, true, "", "hello"], return only truthy values.

let trueArr=[0, 1, false, true, "", "hello"].filter((v)=>{

    return Boolean(!v)
})
console.log(trueArr)

// Filter out duplicate numbers using only filter + indexOf.



// Count the total characters in an array of strings:
// ["hi", "hello", "bye"] → 10

let charCount=["hi", "hello", "bye"].reduce((count,curr)=>{
     return count+=curr.length
},0)
console.log(charCount)



