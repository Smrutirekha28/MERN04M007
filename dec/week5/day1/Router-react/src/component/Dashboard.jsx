import React from 'react'
import {Outlet} from 'react-router'
function Dashboard() {
    //outlet is used to track(triggered) the nested route and itis used in parent component
  return (
    <div>Dashboard
        <Outlet></Outlet>
    </div>
  )
}

export default Dashboard