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
            <ul className='w-lg flex justify-between text-xl cursor-pointer '>
              <li className='hover:text-[#ff6b6b]'>Home</li>
              <li className='hover:text-[#ff6b6b]'>Menu</li>
              {/* <li className='hover:text-[#ff6b6b]'>Services</li>
              <li className='hover:text-[#ff6b6b]'>Contact</li> */}
              <button className='hover:text[#ff6b6b]' to='/login' onClick={handleAuthUser}>{localStorage.getItem("isLogin") ? "Logout" : "Login"}</button>
              <NavLink className='hover:text[#ff6b6b]' to="/register">Register</NavLink>
            </ul>
            {/* <NavLink to="/foods" className=' bg-red-500 text-white px-6 py-2 shadow rounded-lg'>Foods</NavLink> */}
        </div>
    </div>
  )
}

export default Navbar