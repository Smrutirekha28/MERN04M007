import React from 'react'
import {useParams} from 'react-router'
function Cart() {
    let {id} = useParams();//useParam find the value when the value is given to it
  return (
    <div>Cart
        <br />
        id: {id}
    </div>
  )
}

export default Cart