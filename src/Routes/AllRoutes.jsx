import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Pages/About'

import LandingPage from '../Pages/LandingPage'
import Login from '../Pages/Login'
import Pricing from '../Pages/Pricing'

const AllRoutes = () => {
  return (
    <Routes>

        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/about' element={<About />} />
      
    </Routes>
  )
}

export default AllRoutes
