import React from 'react'

function Home(props) {
  return (
    <div>
        Home
        <br />
        a value :{props.a}
        <br />
        string value: {props.str}
        <br />
        boolean value: {props.isTrue.toString()}
        <br />
        Array store in string format : {props.arr}
        <br />
        <ul>
            {
                props.arr.map((v,i)=>(
                    <li key={i}>{v}</li>
                ))
            }
        </ul>
        <br />
        Object value:
        <br />
        Name: {props.obj.name}
        <br />
        Age: {props.obj.age}
        <br />
        Phone: {props.obj.phone}
        <br />
        Function: {props.func()}
    </div>
  )
}

export default Home