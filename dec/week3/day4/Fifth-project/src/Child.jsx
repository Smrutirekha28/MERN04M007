import React from 'react'
import { useContext } from 'react'
import { nameContext,themeContext } from './App'

function Child() {
    let value= useContext(nameContext);
    let theme = useContext(themeContext);
    
    
  return (
    <div>Child
        <br />
        value {value}
        <br />
        theme : {theme}
    </div>
  )
}

export default Child