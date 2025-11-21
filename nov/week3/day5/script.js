console.log("today we are going to learn about the 2nd part of Dom");


//querySelector()
// -> to target the element which has id,class,tag
//-> combination of getElementById, getElementByClassName, getElementByTagName
//->return single value element 
// ->when we target any class name, tag name or id name , at the time of execution it only return the first element of the targeting value
//
// the difference between "getElementById, getElementByClassName, getElementByTagName" and querySelector is only return the 1st element but those return all the element


let h1 = document.querySelector("#head");
console.log(h1); //<h1 id="head">this is a heading</h1>

let divFirst = document.querySelector(".box");
console.log(divFirst);//<div class="box">item1</div>


let firstStp = document.querySelector("p");
console.log(firstStp);//<p>Lorem ipsum dolor sit amet.</p>


let classes= document.querySelectorAll(".box");
console.log(classes);
//it return array and the array name is a NodeList


//tagname()
//return the tag name
console.log(h1.tagName);//H1

//className()
//return class name


//textContent()
//return the  inner text
// diff between textContent() and innerText()  is when we use visibility hidden at that time innerText is not working means it does not show that inner text but in textContent() does not depend on visibility hidden means it retuen the inner text/content

console.log(divFirst.textContent);//item1
console.log(divFirst.innerText);//empty



//getAttribute(attribute name)
// ->to get the attribute value

console.log(divFirst.getAttribute("class"));//box

// setAttribute()
//return both id and value
divFirst.setAttribute("id","heading");
console.log(divFirst);//<div class="box" id="heading" style="visibility: hidden;">item1</div>



// -------------------Question-----------------
// diff between htmlcollection and node list 