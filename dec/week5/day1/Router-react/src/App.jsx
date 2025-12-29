import {Routes,Route} from 'react-router'
import './App.css'
import Home from './component/Home'
import About from './component/About'
import Dashboard from './component/Dashboard'
import Login from './component/Login'
import Service from './component/Service'
import Profile from './component/Profile'
import Cart from './component/Cart'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route index element={<Profile/>}></Route> // index is used for defalt value when anyone click dashboard by default it show the profile page and index is only used in chilc route not parent
          <Route path='cart/:id' element={<Cart/>}></Route>
        </Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
      </Routes>
    </div>
  )
}

export default App
