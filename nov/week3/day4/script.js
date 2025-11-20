console.log("today we are going to learn DOM");

//getElementById()
let h1= document.getElementById("heading")
console.log(h1);//<h1 id="heading">this is a heading</h1>



//getElementByClassName()
// ->it return a array
let boxArr=document.getElementsByClassName("box")
console.log(boxArr);//it reurn a array //[div.box, div.box, div.box]
console.log(boxArr[0]);//to access the first element of the array //<div class="box">item1</div>

//innerText,innerHTML are key
console.log(boxArr[0].innerText);//it is used to access the text of a index and it only retuen only content
console.log(boxArr[1].innerHTML);//it return content as well as tag //item2 <span>spanitem</span>

boxArr[2].innerText="item two"//it take all the content present inside the tag and delete it , then add the given value and also change the original content
console.log(boxArr[2]);//<div class="box">item two</div>



boxArr[0].innerHTML = "<h1>box heading</h1>"
console.log(boxArr[0]);//<div class="box"> <h1>box heading</h1> </div>




//getElementByTagName()
//it retuen a arry 
let p = document.getElementsByTagName("p");
console.log(p);// [p]
