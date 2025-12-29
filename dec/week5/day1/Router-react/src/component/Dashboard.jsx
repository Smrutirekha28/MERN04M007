import React from 'react'
import {Outlet} from 'react-router'
function Dashboard() {
    //outlet is used to track the nested route
  return (
    <div>Dashboard
        <Outlet></Outlet>
    </div>
  )
}

export default Dashboard