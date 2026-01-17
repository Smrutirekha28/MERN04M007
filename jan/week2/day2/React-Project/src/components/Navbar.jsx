import React from 'react'
import { NavLink, useNavigate } from 'react-router'

function Navbar() {
    let navigate = useNavigate()
    const isLogin = localStorage.getItem("isLogin");
    function handleAuthUser(){
      if(isLogin){
        localStorage.removeItem("isLogin");
        navigate("/login")
      }else{
        navigate("/login")
      }
    }
  return (
    <div className='w-screen p-4 shadow-lg fixed top-0 z-50 bg-white/90 backdrop-blur'>
        <div className='max-w-7xl mx-auto   flex justify-between '>
            <p className='text-3xl font-bold text-blue-800 cursor-pointer'
                onClick={()=>navigate("/")}           
            >Food <span className='text-[#ff6b6b]'>Hotel</span></p>
            <div className='w-lg flex justify-between text-xl cursor-pointer '>
              <p className='hover:text-[#ff6b6b] py-2'onClick={()=>navigate("/")}>Home</p>
              <p className='hover:text-[#ff6b6b] py-2' onClick={()=>navigate("/foods")}>Food</p>
              <button className='hover:text[#ff6b6b]  bg-[#ff6b6b] text-white md:px-3 md:py-2 text-center shadow rounded-lg ' to='/login' onClick={handleAuthUser}>{localStorage.getItem("isLogin") ? "Logout" : "Login"}</button>
              <NavLink className='hover:text[#ff6b6b] bg-[#ff6b6b] text-white md:px-3 md:py-2 text-center shadow rounded-lg ' to="/register">Register</NavLink>
            </div>
            {/* <NavLink to="/foods" className=' bg-red-500 text-white px-6 py-2 shadow rounded-lg'>Foods</NavLink> */}
        </div>
    </div>
  )
}

export default Navbar