import React from 'react'
import {Link , NavLink} from 'react-router'
function Nav() {
  return (
    <div>
        {/* <Link to="/about">About</Link>
        <br />
        <Link to="/dashboard">Dashboard</Link>
        <br />
        <Link to="/login">Login</Link>
        <br />
        <Link to="/service">Service</Link> */}


        {/* the link tag otherwise is written as NavLink */}

        <NavLink to="/about">About</NavLink>
        <br />
        <NavLink to="/dashboard" >Dashboard</NavLink>
        <br />
        <NavLink to="/login">Login</NavLink>
        <br />
        <NavLink to="/service">Service</NavLink>
    </div>
  )
}

export default Nav