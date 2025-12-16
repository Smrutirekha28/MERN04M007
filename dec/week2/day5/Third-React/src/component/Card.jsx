import React from 'react'

function Card() {
  return (
    <div className='w-65 h-80 bg-amber-400 p-2 shadow-2xl'>
        <img src={img} alt="" className='w-full h-50 shadow-2xs bg-red-400 rounded-[50%] hover:scale-105 transition duration-200 delay-75'/>
        <h3 className='text-green-500 font-extrabold text-2xl text-center mt-2'>{title}</h3>
        <p className='text-gray-400 text-center text-xl'>{desc}</p>
    </div>
  )
}

export default Card