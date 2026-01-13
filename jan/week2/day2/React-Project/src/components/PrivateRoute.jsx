import React from 'react'
import { Navigate } from 'react-router';

function PrivateRoute({children}) {
    let isLogin = localStorage.getItem("isLogin");
    
  return (isLogin?children : <Navigate to="/login"/>)
}

export default PrivateRoute