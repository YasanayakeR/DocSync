import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctor from './pages/Doctor'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Myprofile from './pages/Myprofile'
import Myappionments from './pages/Myappionments'
import Appoinment from './pages/Appoinment'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
     <Navbar></Navbar>
     <Routes>
      <Route path='/' element ={<Home/>}></Route>
      <Route path='/login' element ={<Login/>}></Route>
      <Route path='/doctors' element ={<Doctor/>}></Route>
      <Route path='/about' element ={<About/>}></Route>
      <Route path='/contact' element ={<Contact/>}></Route>
      <Route path='/myprofile' element ={<Myprofile/>}></Route>
      <Route path='/myappoinments' element ={<Myappionments/>}></Route>
      <Route path='/appoinment/:docId' element ={<Appoinment/>}></Route>
     </Routes>
    </div>
  )
}

export default App
