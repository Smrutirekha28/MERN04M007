import {Routes, Route} from 'react-router'
import './App.css'
import Home from './component/Home'
import About from './component/About'
import Service from './component/Service'
import Nav from './component/Nav'
import Profile from './component/Profile'

function App() {

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
    </div>
  )
}

export default App
// query means when you want to redirect one page to another page it is used but id means it is given in the time of path declaration
// you can give multiple query but single id
//we give parameter at the time of declaration so it is mandatory but query is optional