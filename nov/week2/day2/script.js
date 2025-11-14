

// Flatten a nested array (e.g. [1, [2, [3, 4]], 5] → [1, 2, 3, 4, 5]).

let nestArr = [1, [2, [3, 4]], 5]; // [1,2,3,4,5]
console.log(nestArr.flat())

let arr4 = [1, 2, [3, 4, [5, 6], [7, 8, [9, 10]]]]

console.log(arr4.flat(Infinity))


console.log([[1, 2], [2, 3], [4, 5]].flat())


// Find Maximum and Minimum let numbers = [45, 12, 78, 34, 89, 23];

let numbers = [45, 12, 78, 34, 89, 23];  //max :89

let max = numbers[0];
let min = numbers[0]
for (let v of numbers) {
    if (max < v) {
        max = v;
    }
    if (v < min) {
        min = v;
    }
}
console.log("max :", max)
console.log("min :", min)

console.log(Math.max(...numbers))
console.log(Math.min(...numbers))


// Remove Duplicates let arr = [1, 2, 3, 2, 4, 1, 5];

let arr = [1, 2, 3, 2, 4, 1, 5];
let distictArr = []
for (let v of arr) {
    if (!distictArr.includes(v)) {
        distictArr.push(v);
    }
}
console.log(distictArr)

console.log([...new Set(arr)]);
console.log(new Array(1, 2, 3))







// Merge and Remove Duplicates
// let a = [1, 2, 3];
// let b = [3, 4, 5, 6];

let a = [1, 2, 3];
let b = [3, 4, 5, 6];
let mergeArr = a.concat(b);
console.log(mergeArr)
console.log("Distict array :", [...new Set(mergeArr)])



// Double Each Element in same array
let eleArr = [2, 4, 6, 8]   // output :[4,8,12,16]

let doubleArr = [];

for (let v of eleArr) {
    doubleArr.push(v * 2)
};
console.log(doubleArr);

// same array
for (let idx = 0; idx < eleArr.length; idx++) {
    eleArr[idx] *= 2;
}

console.log("original array :", eleArr)

// Product of All Elements

let numArr = [1, 2, 3, 4, 5, 6]; //720

let mult = 1;
for (let v of numArr) {
    mult *= v;
}
console.log("After multiply :", mult)





// Convert to Uppercase

let strArr = ["aditya", "smruti", "aropraksh", "faruk", "abc"];

for (let v of strArr) {
    strArr[strArr.indexOf(v)] = v.toUpperCase()
}
console.log(strArr)


// Find Words with Length > 4

for (let v of strArr) {
    if (v.length > 4) {
        console.log(v)
    }
}



// Sort Numbers in Ascending and Descending Order

let numberArr = [4, 1, 3, 6, 9, 5];
console.log(numberArr.toSorted())

console.log(numberArr.toSorted().reverse());

// console.log(numberArr.toSorted((a,b)=>b-a))


// Check All Positive
let count = 0;
for (let v of numberArr) {
    if (v > 0) {
        count++
    }
}
if (count === numberArr.length) {
    console.log("all elements in numberArr are positive")
} else {
    console.log("this array has a -ve number")
}



// Check Any Number Greater Than 100  let arr = [45, 67, 23, 150, 89];

let arr1 = [45, 67, 23, 150, 89];
for (let v of arr1) {
    if (v > 100) {
        console.log("yes this array have a number which is > 100", v);
        break;
    }
}

// Count Occurrences of Each Element  let arr = ["apple", "banana", "apple", "cherry", "banana", "apple"];

// let fruitsarr = ["apple", "banana", "apple", "cherry", "banana", "apple"];

// for (let i = 0; i < fruitsarr.length; i++) {
//     let fruit = fruitsarr[i];
//     let count = 0;
//     for (let j = i + 1; j < fruitsarr.length; j++) {
//         if (fruit === fruitsarr[j]) {
//             count++;
//         }
//     }
//     console.log(`${fruit} : ${count + 1}`)
// }


