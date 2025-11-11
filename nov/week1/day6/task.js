//- Create an array of 5 fruits.
   // - Print the **first** and **last** elements using indexing.

let fruitArr = ["Apple","Banana","Pineapple","Wood-apple","Watermelon"]
console.log(fruitArr[0]);
console.log(fruitArr[4]);


//   - Add `"Mango"` to the end of the array using `push()` and `"Kiwi"` to the start using `unshift()`.
fruitArr.push("Mango");
console.log(fruitArr);


fruitArr.unshift("Kiwi");
console.log(fruitArr);


//- Remove the **first** and **last** elements using `shift()` and `pop()`.
fruitArr.shift();
console.log(fruitArr);


fruitArr.pop();
console.log(fruitArr);









//- Find the **length** of an array without using `.length` property (using loop).
//count++



// - Use `indexOf()` to find the position of `"Banana"` in an array.
console.log(fruitArr.indexOf("Banana"));



// - Use `includes()` to check if `"Orange"` exists in the array.
console.log(fruitArr.includes("Orange"));




// - Convert an array of numbers `[1,2,3,4,5]` into a string separated by “-” using `join()`.
let numArr = [1,2,3,4,5]
console.log(numArr.join("-"));




// - Given an array `[1, 2, 3, 2, 1, 4, 5]`, remove **duplicates**.




// - Given an array of strings, return the one with the **longest length**.
let sentence1 = "JavaScript is a powerful programming language";
let words = sentence1.split(" "); 
let longest = ""; 
for (let v of words) {
  if (v.length > longest.length) {
    longest = v;
  }
}
console.log(longest);


// - Reverse a string using array methods (`split()`, `reverse()`, `join()`).
let strArr =[ "Hii! Welcome to my world."]
// let splitArr = strArr.split(" ");


let reverseArr = strArr.reverse();
console.log(reverseArr);
// ------------------------------------------------doubt




// - Count how many even numbers exist in `[2, 5, 8, 11, 14, 17, 20]`.
let arr=[2, 5, 8, 11, 14, 17, 20];
let countNumber =0;
for(let i of arr){
    if(i%2==0){
        countNumber++;
        
    }
}
console.log(countNumber);



// - Create a new array that contains the **length of each string** from `["React", "Node", "MongoDB"]`.
let newArr=["React", "Node", "MongoDB"];
// ------------------------------------------------doubt





// - Convert `[1,2,3,4,5]` → `[5,10,15,20,25]`
let originalArr = [1,2,3,4,5];
let changeArr=[];
for(let v of originalArr){
    // console.log(v*5);
     changeArr = v*5;
     console.log(changeArr);
     
}






// - Replace all negative numbers in `[4, -2, 6, -9, 7]` with `0`.
let numberArr = [4, -2, 6, -9, 7];
let replaceArr = numberArr.splice(0, 1,2)
console.log(replaceArr);
// ------------------------------------------------doubt
