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
    <div className='w-full h-screen  bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex justify-center items-center'>
    <div className='border-2  w-100 bg-blur h-1/2'>
      <p className='flex items-center justify-center text-3xl'>Login</p>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" name="" id="" value={email} className='border-2 ' onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" name="" id="" value={password} className='border-2' onChange={(e)=> setPassword(e.target.value)} />
        </div>
        <button type='submit' onClick={handleLogin}>Submit</button>
      </div>
    </div>
  )
}

export default Login