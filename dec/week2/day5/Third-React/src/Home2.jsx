import React from 'react'

function Home2({b = 20,obj,children ="hii"}) { /* if b value is not pass in app.jsx then this default value is print  and same as children default value*/
  return (
    <div>
        Home2
        <br />
        {b}
        <h2 className='bg-blue-900 text-2xl'>this is home2 heading</h2> /* class */
        <br />
        {obj.name}
        <br />
        {children}
    </div>
  )
}

export default Home2