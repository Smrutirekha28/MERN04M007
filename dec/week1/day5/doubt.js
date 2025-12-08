//Event
//it is a object
// mousedown 
//when i press the mouse on that at time it work 

//mouseup
//when i clicked and at that moment relax it at time it work 


// mouseenter 
//when we enter to that part at that time it execute
//it execute once


// mouseleave
//when i leve that part at time it execute



// mousemove 
//when we move the crusor over that and also it work like hover property


// mouseout


// mouseover
//when i click that part and hover at the same moment at that time it work


//.............................................

// key
//keydown
//when the key is pressed at that time it work


//keyup
//when the key is clicked and relax it

//keypress
//when the key is pressed at that time it work
//same as keydown  but restriction in some keys(shift,alt,ctrl)

//........................................................


//input
//when you write something in input feild 

//change
//when you write something in input feild and at the same moment you remove your crusor from that part


//focus
//when you click that it will be focused


//blur
//when it out from the focus
//it is opposite of form


//submit
//when we want to submit the form


//load
//when the whole page is loaded at that time it work

//DOMContentLoaded
//advance version of load
//when the DOM content are loaded at that time it work

//scroll
//when we scroll the page
window.addEventListener("scroll",()=>{
    console.log("scroll");
    
})



//resize
//when the screen size is increase and decrease


window.addEventListener("resize",()=>{
    console.log("resize");
    
})








//event object
//click
//when it is used pointerevent is executed

//mousedown
//when it is used mouseevent is executed

//input
//when it is used inputevent is executed


//form
//by default try to pass the data
//when it is used  event is executed


//submit
//when it is used submitevent is executed



//key
//when it is used keyboardevent is executed
//if we want to see the key which is pressed at that time "key" is used to know that


document.addEventListener("keydown",()=>{
    console.log("e.keyCode",e.keyCode);//to know the key code
    console.log("e.altkey",e.altKey);//to know the alt key is pressed or not
    console.log("e.ctrl",e.ctrlKey);//to know the ctrl key is pressed or not
})


//JSON
//it is a raw data
//it is used to convert any data into javascript object



//this keyword
//it is used to find the current object value











// Event
let p = document.querySelector("p");
console.log(p)


// p.addEventListener("dblclick",()=>{
//     console.log("paragraph clicked")
// })

// mouse

// p.addEventListener("mousedown",()=>{
//     console.log("mouse down")
// })

// p.addEventListener("mouseup",()=>{
//     console.log("mouse up")
// })

// p.addEventListener("mousemove",()=>{
//     console.log("mouse move")
// })


// document.addEventListener("mouseover",()=>{
//     console.log("mouse over")
// })


// keys
// document.addEventListener("keydown",()=>{
//     console.log("key down")
// })
// document.addEventListener("keyup",()=>{
//     console.log("key up")
// })


// document.addEventListener("keypress",()=>{
//     console.log("keypress")
// })


let input = document.querySelector("input");
console.log(input)

// input.addEventListener("input",()=>{
//     console.log("input")
// })

// input.addEventListener("change",()=>{
//     console.log("input change")
// })
// input.addEventListener("focus",()=>{
//     input.style.backgroundColor="green"
// })
// input.addEventListener("blur",()=>{
//     input.style.backgroundColor="green"
// })

let form = document.querySelector("form");
// form.addEventListener("submit",()=>{
//     console.log("form submitted")
// })


window.addEventListener("DOMContentLoaded", () => {
    console.log("load")
})

// window.addEventListener("scroll",()=>{
//     console.log("scroll")
// })

// window.addEventListener("resize",()=>{
//     console.log("resize")
// })


// event object
p.addEventListener("click", (e) => {
    console.log(e)
})

// p.addEventListener("mousedown",(e)=>{
//     console.log(e)
// })

input.addEventListener("input", (e) => {
    console.log(e)
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(e)
})

document.addEventListener("keydown", (e) => {

    console.log("e.key", e.key)
    console.log("e.keyCode", e.keyCode)
    console.log("e.altKey", e.altKey)
    console.log("e.ctl", e.ctrlKey)
})



let div = document.querySelector("div");


let p1 = document.createElement("p");
p1.innerText = "this is paragraph";

let b = document.createElement("b");
b.innerText = "this is paragraph";


// div.appendChild(p1)
// div.appendChild(b)

// div.append(p1,b)

// div.prepend(p1)

div.after(p1)

var name = "yyy";

let obj = {
    name: "zzz",
    print: function () {
        console.log(this.name)
    }
}

obj.print()




