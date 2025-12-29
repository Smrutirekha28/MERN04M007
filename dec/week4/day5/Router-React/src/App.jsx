
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './component/Home'
import About from './component/About'
import Dashboard from './component/Dashboard'
import Wrongpath from './component/Wrongpath'

function App() {

  
  
  //steps 
  //give the browser router to the parent
  //create routes
  //create route
  //inside the route declare he path and declare the element which follow the path
  
  //the default path is '/'
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='*' element={<Wrongpath/>}></Route>
      </Routes>
    </div>
  )
}

export default App














// react router
// it is root by which we can reach in the component
