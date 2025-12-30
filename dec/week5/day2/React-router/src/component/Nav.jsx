import React from 'react'
import {NavLink} from 'react-router'
function Nav() {
  return (
    <div>
        <NavLink to="/about" style={({isActive}) => ({color: isActive ? "red" : ""})}>About</NavLink>
        <NavLink to="/service" style={({isActive}) => ({color: isActive ? "red" : ""})}>Service</NavLink>
    </div>
  )
}

export default Nav