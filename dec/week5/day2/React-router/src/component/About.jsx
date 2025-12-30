import React from 'react'
import {useNavigate , useLocation} from 'react-router'
function About() {

    let navigate = useNavigate();//navigate one page to another
    let  {pathname} = useLocation();//it is used to know the path
    console.log(pathname);
    
    // function handleClick(){
    //     navigate("/service")
        
    // }

    function handleClick(){
        navigate("/profile?search=std1&cata=3");//this is the query and to give multiple query "&" is used
    }
    
  return (
    <div>About
        <button onClick={handleClick}>go to service</button>
    </div>
  )
}

export default About