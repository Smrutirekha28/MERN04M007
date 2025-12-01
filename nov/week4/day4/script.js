// some extra event

//for the tags input ,select
// what are the event (input,change,focus,blur);
let input = document.querySelector("input");
// input.addEventListener("input",(e)=>{
//     console.log(e.target.value)
// })
// input.addEventListener("change",(e)=>{
//     console.log(e)
//     console.log(e.target.value)
// })
// input.addEventListener("focus",(e)=>{
//     console.log(e)
//     console.log("input field focus")
// })
input.addEventListener("blur", (e) => {
    console.log(e)
    console.log("input field blur")
})

// mouse
// what are the event mousemove,mouseup,mousedown,mouseenter,mouseleave

let p = document.querySelector("p");
// p.addEventListener("mousemove",(e)=>{
//     console.log(e)
//     console.log("mouse move")
// })
// p.addEventListener("mousedown",(e)=>{
//     console.log(e)
//     console.log("mouse down")
// })
// p.addEventListener("mouseup",(e)=>{
//     console.log(e)
//     console.log("mouse up")
// })
// p.addEventListener("mouseenter",(e)=>{
//     console.log(e)
//     console.log("mouse enter")
// })
// p.addEventListener("mouseleave",(e)=>{
//     console.log(e)
//     console.log("mouse leave")
// })

// key
// what are the event of key keyup,keydown,keypress

// document.addEventListener("keydown",()=>{
//     console.log("key down")
// })
// document.addEventListener("keyup",()=>{
//     console.log("key up")
// })
// document.addEventListener("keypress",()=>{
//     console.log("key press")
// })
// document.addEventListener("keydown",(e)=>{
//     console.log("object",e)
//     console.log("key ",e.key);
//     console.log("key code ",e.keyCode);
//     console.log("code ",e.code);
//     console.log("is alt key pressed ",e.altKey)
//     console.log("is ctrl key pressed ",e.ctrlKey)
//     console.log("is shift key pressed ",e.shiftKey)
//     console.log("key down")
// })

// special events
// load,DOMContentLoaded ,scroll,resize

// window.addEventListener("load",()=>{
//     console.log("window loaded")
// })
// window.addEventListener("DOMContentLoaded",(e)=>{
//     console.log(e)
//     console.log("window content loaded")
// })

// window.addEventListener("scroll",(e)=>{
//     console.log(e.target)
//     console.log("page scroll event")
// })

// window.addEventListener("resize",(e)=>{
//     console.log(e)
//     console.log("page resize")
// })


// form operation
let form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let inputs=document.querySelectorAll("form input");
    let nameInputValue=inputs[0].value;
    let ageInputValue=inputs[1].value
    
    localStorage.setItem("userData",JSON.stringify({nameInputValue,ageInputValue}));
    localStorage.setItem("numb",30);
    alert("successfully data stored in localstorage")
})

let fetchBtn=document.getElementById("fetch");
fetchBtn.addEventListener("click",()=>{
    let data=localStorage.getItem("userData");
    let numb=localStorage.getItem("numb");
    console.log(JSON.parse(numb))
    console.log(JSON.parse(data))
})

// task : 
// step 1
// first you have to create a register page having fields are(fullName,age,phone,email,password)

// step 2
// stored the register data to the localstorage

// step 3
// create a login form having fields (email,passwrod)

// step 4
// compare the user input email and password (login ) with the email and password that have already stored inside the localstorage
