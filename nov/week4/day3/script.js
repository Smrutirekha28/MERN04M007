let btn = document.querySelector("#btn");
// btn.addEventListener("click",()=>{
//     console.log("button clicked");
// });

// change ,input ,focus
let input = document.querySelector("input");
// input.addEventListener("focus",()=>{
//     console.log("focused");
// })

// dblclick , mouseover , submit

let form = document.querySelector("form");
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     console.log("form is submitting")
// })

// load
// document.body.addEventListener("load",()=>{
//     console.log("page loading")
// })

// keyup ,keydown ,keypress

// btn.addEventListener("keypress",()=>{
//     console.log("key press")
// })

let p = document.querySelector("p");
// p.addEventListener("touchstart",()=>{
//     console.log("touched start")
// })


// Event object

btn.addEventListener("click", (e) => {
    console.log(e)
    console.log(e.type)
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.srcElement);
    console.log(e.altKey);
    console.log(e.timeStamp)
})

// whenever the event is executing at that time a event object is created
// how to get the event object
//    ans :- by passing any variable inside the event handling function

form.addEventListener("submit", (e) => {
    console.log(e.type);
})

p.addEventListener("keypress", (e) => {
    console.log(e.key);
    console.log("hii");
});


input.addEventListener("input", (e) => {
    console.log(e.target.value)
})

// preventDefault()
// stopPropagation()


// ClintX , clintY

let light = document.querySelector(".spotlight");

document.addEventListener("mousemove", (e) => {
    light.style.left = e.clientX + "px";
    light.style.top = e.clientY + "px";
})
