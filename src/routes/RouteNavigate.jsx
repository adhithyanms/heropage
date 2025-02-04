import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from '../Commponent/Home';
import Navbar from '../Commponent/navbar';
import About from '../Commponent/About';
import Contact from '../Commponent/Contact';
import Profile from '../Commponent/Profile';
function RouteNavigate() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home /> }/>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />}/>
        <Route path='/profile' element={<Profile />}/>
    </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouteNavigate
