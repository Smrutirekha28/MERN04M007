import React from 'react'

function Navbar({setLogin, isLogin}) {
  return (
    <div>
        <nav className='w-full p-7 bg-green-500 flex justify-end'>
          <button className='py-2 px-2 bg-amber-500 rounded uppercase' onClick={()=>setLogin(true)}>
            {isLogin ? "logout" : "login"}
          </button>
        </nav>
    </div>
  )
}

export default Navbar