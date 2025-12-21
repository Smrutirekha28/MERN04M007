import React from 'react'
import { useState } from 'react'

function Home() {
    //the syntax of usestate 
    //keyword[variable,the function used for update the variable] = useState(initialization)

    // const [obj,setObj] = useState({});
    // function addData(){
    //     setObj({
    //         name: "abc",
    //         age:20
    //     })
    // }

    const [count,setCount] = useState(0)
    

    let a =0;
    function updateA(){
        a= a+1;
        console.log(a);
        
    }
  return (
    <div>Home
        <br />
       
        {/* <button onClick={updateA}>click</button> */}
        {/* <br />
        name {obj.name}
        <br />
        age{obj.age}
        <br />
        <button onClick={addData}>add Data</button> */}
        <br />
        count {count}
        <br />
        <button onClick={()=> setCount(count -1)}>Inc</button>
    </div>
  )
}

export default Home