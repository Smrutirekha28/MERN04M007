import React from 'react'
import { useContext } from 'react'
import { funcContext } from './App'

function Child2() {
    let fun = useContext(funcContext)
  return (
    <div>Child2
        <button onClick={fun()}>Increment</button>
    </div>
  )
}

export default Child2