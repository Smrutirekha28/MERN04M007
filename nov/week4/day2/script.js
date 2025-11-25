
console.log("we are going to learn how to create element by using js");

//createElement()     
// help to create a element

let h1=document.createElement("h1")
console.log(h1);//<h1>this is a heading</h1>
h1.innerText="this is a heading";
// h1.classList.add("heading")
// or
h1.className="heading"


document.body.appendChild(h1);//this is used to sho the js part in the html



let div=document.getElementById("box");
div.appendChild(h1)


let p  = document.createElement("p");
p.innerText = "this is para"

let b= document.createElement("b");
b.innerText="this is the bold tag"


// div.appendChild(p)
// or
div.append(h1,p,b)
//append() 
//access all the element at a time
// add the element in the last of the node means in the body part after the script tag




//prepend()
// add the element in the first of the node


let h5=document.createElement("h5");
h5.innerText="this is a heading 5"
div.prepend(h5)


let i = document.createElement("i");
i.innerText="this is italic"

//before()
//add the element just before 

div.before(i)


//after()
//add the element just after 
div.after(i)



let imgContainer = document.createElement("div");
imgContainer.style.cssText = "height:300px; width:300px; background-color:blue;"

let img = document.createElement("img")
img.setAttribute("src", "https://static.vecteezy.com/system/resources/thumbnails/050/393/628/small/cute-curious-gray-and-white-kitten-in-a-long-shot-photo.jpg")
img.style.cssText="width:300px;height:300px"


imgContainer.append(img);
document.body.append(imgContainer)





//Event
//3part ->location, event, event handling func
//change in state of an object
//events are fired to notify code of "interesting changes" that may affect code execution

let clickedFunc =()=>{
    console.log("button clicked");   
}
// or

let btn= document.getElementById("btn");
btn.onclick=//event
()=>{// this is the handling part
    console.log("id btn clicked");
    
}


//addEventListener()
//1st parameter ->event name
//2nd parameter ->event handling function
//3rd parameter ->propagation type (by default bubbling(false) child->parent,
// another capturing(true) parent->child)


let button= document.getElementById("btn_1")
button.addEventListener("click",()=>{
    console.log("add event listener btn execute");
},false);



let catimg = document.getElementById("catimg");
catimg.addEventListener("click",(e)=>{
        e.stopPropagation();
    console.log("cat img clicked");
    
})


document.querySelector(".image").addEventListener("click",(e)=>{
    console.log("parent ul clicked"); 
})




















