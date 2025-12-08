let arr = [1, 2, 4, 5, 6];
for (let idx in arr) {
    console.log(arr[idx])
}

let obj = {
    name: "soumya",
    phone: 3487324,
    email: "soumya@gamil.com"
}

for (let key in obj) {
    console.log(key)
}


// for of
for (let v of arr) {
    console.log(v)
}

// for(let v of obj){
//     console.log(v)
// }

let numerSet = new Set([1, 2, 3, 4, 5]);
console.log(numerSet)

for (let v of numerSet) {
    console.log(v)
}


let numerMap = new Map();
numerMap.set("name", "xyz");
numerMap.set("age", 20);
console.log(numerMap);

for (let v of numerMap) {
    console.log(v)
}

let n = "1"
console.log(1 + 3 - 1 + +n + 4 + "5");

let str = "sdkjhs"

let objStr = new String()


let value = "sdhksh";
let str1 = `value ${value}`;
console.log(str1);

let option = 0
switch (option) {
    case 1: console.log("print 1");
        break;

    case 2: console.log("print 2");
        break;

    case 3: console.log("print 3");
        break;

    default: console.log("default");
        break;
}



console.log(Array.of(1, 23, 4, 5, 6, [122344]));

console.log([1, 2, [3, 4], [5, [6, 7]]].flat(Infinity))

console.log([1, 2].join("-"));

console.log(new Array(4).fill("qlith"));

let numberArr = [1, 2, 3, 4, 5, 6];
let sum = numberArr.reduce((accu, current) =>
    accu = accu + current
    , 0)

console.log(sum);

console.log([0] == 0);

// function




// function (){

// }

// named function
// function fun1() {
//     console.log("function is executeing")
// }

// fun1()

// expressional function

// let func2 = function () {
//     console.log("expressional func")
// }

// func2()


// let arrowFun=()=>{
//     console.log("arrow function")
// }

// arrowFun()

// higher order function

// let hof = function (fun) {
//     // console.log(fun)
//     return fun;
// }

// hof(function () {
//     console.log("dsjsj")
// })


// iif
(function () {
    console.log("IIF")
})()


// [10, 20, 30, 40].forEach((v) => {
//     console.log(v)
// });


let p = document.querySelector("p");
p.classList.add("second")
p.classList.add("third")


p.classList.remove("para")

console.log(p.classList.contains("second"))

p.classList.toggle("second")
console.log(p)