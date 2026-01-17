import React, { useState } from 'react'
import { toast } from 'react-toastify';

function Login() {
      let [email,setEmail] = useState("")
      let[password,setPassword] = useState("")

  function handleLogin(){
      let trimedEmail = email.trim();
      let trimedPassword = password.trim();
      let oldData = localStorage.getItem("users");
       
        if(oldData){
          let users = JSON.parse(oldData);
          let userEmail = users.find((ele)=> ele.email === trimedEmail);
          if(userEmail){
              if(userEmail.password === trimedPassword){
                localStorage.setItem("isLogin" ,true)
                toast.success("login success")
              }else{
                toast.error("invalid password")
              }
          }else{
            toast.error("invalid email")
          }                
        }else{
          toast.error("user not availale")
        }
      
  }
  return (
    <div className='min-h-screen flex items-center justify-center  bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50'>
    <div className='w-full max-w-md bg-white p-8 rounded-xl shadow-lg'>
      <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">
      Login
    </h2>
        <div>
          <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
          <input type="email" placeholder="Enter your email" id="" value={email} className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-1'>Password</label>
          <input type="password" placeholder="Enter your password"  value={password} className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' onChange={(e)=> setPassword(e.target.value)} />
        </div>
        <button type='submit' className='w-full bg-[#ff6b6b] text-white py-2 mt-5  rounded-lg font-semibold transition' onClick={handleLogin}>Submit</button>
      </div>
    </div>
  )
}

export default Login