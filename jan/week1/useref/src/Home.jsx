import React, { useRef, useState } from 'react'

function Home() {

    // it will manipulate the Dom object 

    let pRef = useRef()

    function handleClick() {
        console.log(pRef.current.innerText);
        pRef.current.style.backgroundColor = "red"
        pRef.current.style.fontSize = "30px"
    }

    // const [email, setEmail] = useState("")

    console.log("rerender")

    let emailRef = useRef(null)

    function hadleSubmit(e) {
        e.preventDefault();

        console.log(emailRef.current.value)
    }

    return (
        <div>
            <p ref={pRef}>Hello Welcome</p>
            <button onClick={handleClick}>
                Click Here
            </button>

            <form onSubmit={hadleSubmit}>
                <input ref={emailRef} type="email" />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Home