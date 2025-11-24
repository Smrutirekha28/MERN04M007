
// diff between htmlcollection and node list 

let boxList = document.getElementsByClassName("box");
console.log(boxList);
console.log("before adding",boxList.length);//4

//html colllection are live


// let div = document.createElement("div");//it is used to create a new div
// div.className="box"
// div.innerText="item 5"
// document.body.appendChild(div)
// console.log("after adding",boxList.length);





// node list 
//text type,element type,node type
// ->it only give the element which are present in html but if we change in js lively it does  not show
//-> it is static
//->htmlcollection is live
//->htmlcollection is  a nodelist but not vice-versa


//using queryselector
// let boxes = document.querySelectorAll(".box");
// console.log(boxes);
// div.className="box"
// div.innerText="item 5"
// document.body.appendChild(div)
// console.log(boxes);

// console.log(Array.from(boxes));// it is used to convert an element in array format




document.body.style="background-color:blue;font-size:20px";//to style the webpage through js
//or
document.body.style.cssText="background-color:red"


console.log(document.body.firstChild);//#text // because after body there is a space

console.log(document.body.lastChild);//<script src="script.js"></script>
console.log(document.body.childNodes);//NodeList(12) [text, div.box, text, div.box, text, div.box, text, div.box, text, p, text, script] // text means space


console.log(document.body.children);//HTMLCollection(6) [div.box, div.box, div.box, div.box, p, script] //it only show the element present in ui page and it does not take any space and also it convert the nodelist into htmlcollection






//classlist
let p = document.getElementById("para")
p.classList.add("para4")//add the classname in the last
console.log(p);//p#para.paragraph.para1.para2.para4

p.classList.remove("para1")//remove the class name
console.log(p);//p#para.paragraph.para2.para4

console.log(p.classList.contains("para2"));// true // it check the class name is present or not and return boolean


//toggle
//->if present then remove and if not present it add
p.classList.toggle("para5")
console.log(p);//p#para.paragraph.para2.para4.para5

