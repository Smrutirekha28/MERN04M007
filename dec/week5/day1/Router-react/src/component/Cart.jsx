import React from 'react'
import {useParams} from 'react-router'
function Cart() {
    let {id} = useParams();//useParam catch the id  from the url
  return (
    <div>Cart
        <br />
        id: {id}
    </div>
  )
}

export default Cart