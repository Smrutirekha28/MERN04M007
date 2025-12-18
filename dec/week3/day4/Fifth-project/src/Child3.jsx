import React from 'react'
import { useContext } from 'react'
import { funContext } from './App'

function Child3() {
    let fun = useContext(funContext);
  return (
    <div>Child3
        <br />
        return : {fun()}
    </div>
  )
}

export default Child3