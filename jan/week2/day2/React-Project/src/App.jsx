
import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Foods from './components/Foods'
import Food from './components/Food'
import Login from './components/Login'
import Register from './components/Register'
import PrivateRoute from './components/PrivateRoute'

function App() {

  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/foods' element={
        <PrivateRoute>
          <Foods/>
        </PrivateRoute>}></Route>
        <Route path='/food/:id' element={<Food/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </div>
  )
}

export default App
