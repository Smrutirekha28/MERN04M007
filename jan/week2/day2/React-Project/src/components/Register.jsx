import React, { useState } from 'react'
import { toast } from 'react-toastify'

function Register() {
    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [phone, setPhone] = useState("")
    let [password,setPassword] = useState("")

    function handleRegister(e){
        e.preventDefault();
        try {
          let oldData = localStorage.getItem("users");
          let users = oldData? JSON.parse(oldData) : [];
          users.push({name,email,phone, password});
          // or
          // users = [...users,{name,email,phone, password}]
          localStorage.setItem("users",JSON.stringify(users))
          setName("")
          setEmail("")
          setPhone("")
          setPassword("")
          toast.success("Rgistration successful")
          
        } catch (error) {
          toast.error("register failed")
        }
    }
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
      <div className='w-full max-w-md bg-white p-8 rounded-xl shadow-lg'>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
      Create Account
          </h2>
        <div>
          <label htmlFor="" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input type="text" placeholder="Enter your full name" value={name} className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>  
          <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
          <input type="email" placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={email}   onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>  
          <label htmlFor="" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input type="number" placeholder="Enter your phone number" value={phone} className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' onChange={(e) =>setPhone(e.target.value)}/>
        </div> 
        <div>
          <label htmlFor="" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input type="password"  placeholder="Create a password" value={password}  className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' onChange={(e)=>setPassword(e.target.value)}/>
        </div>
          <button onClick={handleRegister} className="w-full bg-[#ff6b6b] text-white py-2 rounded-lg font-semibold mt-5  transition">Register</button>
      </div>    
    </div>
  )
}

export default Register