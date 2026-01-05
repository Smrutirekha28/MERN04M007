import React from 'react'
import { useRef } from 'react'

function Home() {
    let nameRef = useRef();
    let ageRef = useRef();
    let phnRef = useRef()

    function handleSubmit(e){
        e.preventDefault()
        let name = nameRef.current.value;
        let age = ageRef.current.value;
        let phn = phnRef.current.value;
        localStorage.setItem("user",JSON.stringify({name,age,phn}))
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
            <input type="text" ref={nameRef}/> <br />
            <label htmlFor="">Age</label>
            <input type="number" ref={ageRef} /> <br />
            <label htmlFor="">Phone No.</label>
            <input type="number" ref={phnRef}/><br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Home