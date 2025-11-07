console.log("today we are going to learn arrays methods");
let arr=[1,2,3,4,5]
console.log(arr);

let arrObj = new Array(6,7,78,9,0)
console.log(arrObj);


console.log(Array(3));//it create an empty array with 3 empty index 
console.log(Array(3).fill("js"));//it create an empty array with 3 empty index and fill the empty indexes as "js"


console.log(Array.of(1,2,3,4,5));

console.log(Array.from("abc"));//['a', 'b', 'c'] it store the whole string in single single index



//manipulation method



// push()//it store the element in last index , accept single and multiple also
arr.push(6);
console.log(arr);
arr.push(7,8,9,"hello",true);
console.log(arr);

//unshift // add in forst index
arr.unshift(0)
console.log(arr);


//pop()//remove the last index
arr.pop()
console.log(arr);


for(let i=1;i<=5;i++){
    arr.pop()
}console.log(arr);//[0, 1, 2, 3, 4, 5]

//shift //remove from starting index
arr.shift();
console.log(arr);


 
//includes()//check the value is present in array or not and if yes return true otherwise false
console.log(arr.includes(5));


//at()//if we pass any index it will the that index value
console.log(arr.at(0));

//indexOf() // if we give any value of array it gives the value is present in which index
console.log(arr.indexOf(10));//if the value is not present in the array it will give -1
console.log(arr.indexOf(5));//4



//isArray()
console.log(Array.isArray());// if we give the variable name it will show that the variable is array or not and give output as true and false
console.log(Array.isArray(arr));//true

//reverse()// also change in original array
console.log(arr.reverse());//[5, 4, 3, 2, 1]
console.log(arr);


//toReversed()//not change in original array
console.log(arr.toReversed());//[1, 2, 3, 4, 5]
console.log(arr);//[5, 4, 3, 2, 1]



//sort()//change the original array and sort the array (ascending order)
let numArr = [3,4,7,1];
console.log(numArr.sort());//[1, 3, 4, 7]
console.log(numArr);//[1, 3, 4, 7]


//toSorted()//don't change the original array

console.log(numArr.toSorted());//[1, 3, 4, 7]
console.log(numArr);//[3, 4, 7, 1]



//slice()
console.log(arr.slice(1));

//splice() starting index, how many elemne t u want to remove from the starting index , which elemnet u want to add in starting index
let aarr= ["bye",1,2,3,4,5];
aarr.splice(0,2,"hii")
console.log(aarr);//['hii', 2, 3, 4, 5]
aarr.splice(0,2,"hii",9,12,45)
console.log(aarr);//['hii', 9, 12, 45, 3, 4, 5]



//join()//join all the element of array in string format
console.log(aarr.join(""));//hii91245345
console.log(aarr.join("-"));//hii-9-12-45-3-4-5


//toString()
console.log(arr.toString());




console.log([[1,2],[4,3],[7,8]].join(""));//1,24,37,8

//flat() 
console.log([1,2],[4,3],[7,8].flat());//all the elements are store in single array
