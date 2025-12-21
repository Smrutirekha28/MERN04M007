
import { useState } from 'react'
import './App.css'
import Home from './Home'

function App() {

// const [a,setA] = useState(0); //to maintain we have to use use state hook (which is used to manage the state inside the component)
// [a,setA] here a is an variable, setA is a function
//the work of setA is it change the value  of variable "a" or update it
//useState(0) here 0 is the initialisation value 
//the useState manage all of them(a,setA)


// let a = 1;
// function update(){
  //   a++;
  //   console.log(a);
  
  // }


  // const [name,setName] = useState("");
 
  // let handleText=()=>{
  //   setName("hii");
  // }


  // const [obj,setObj] = useState({});
  // function handleObj(){
  //   setObj({
  //     name: "hii",
  //     age:20
  //   })
  // }

  return (
    <>
     hello
     <br />
     {/* direct calling */}
     {/* <button onClick={update()}>Increment</button> */}

     {/* indirect calling */}
     {/* <button onClick={()=>update()}>increment</button> */}
{/* 
     <br />
     value {a}

     <br />
     <button onClick={()=> setA(a+1)}>Increment</button>

     <br />
     name :  {name}
     <button onClick={handleText}>click here to add some text</button>
     <br />
     
      <br />
      name {obj.name}
     <button onClick={handleObj}>click here for object</button> */}
     <Home/>

    </>
  )
}

export default App
