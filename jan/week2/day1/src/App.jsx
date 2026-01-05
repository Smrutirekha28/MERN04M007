
import { useRef } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useState } from 'react';
import Home from './Home';

function App() {
// let nameRef = useRef("qlith");//nameRef is a object
// console.log(nameRef.current);//current is the key, used to access the initialize value 


// let nameRef = useRef()

// useEffect(()=>
//   {console.log(nameRef.current.innerText);

//   },[]);


// const[input,setInput] = useState("");

let inputRef= useRef()
useEffect(()=>{
  console.log(inputRef.current.value);
},[])


function handleSubmit(e){
  e.preventDefault()
  console.log(inputRef.current.value);
  localStorage.setItem("name",inputRef.current.value)
}
console.log("render");



// const user = {
//    name: "John", 
//    age: 30 
//   };
// console.log(user.age); 
// Object.freeze(user);//freeze method is used to make the object constant and noone can change it
// user.age = 31; 
// console.log(user.age);



  return (
    <div>
      {/* useRef()
      maintain data in render time */}
      

        {/* <p ref={nameRef}>Lorem ipsum dolor sit amet.</p> */}
      <form action="" onSubmit={handleSubmit}>
        {/* <input type="text" onChange={(e)=>setInput(e.target.value)} /> */}
        <input type="text" ref={inputRef}/>
        <button>Submit</button>
      </form>
      <Home/>
    </div>
  )
}

export default App
