import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Ask from '../components/NestedRoutes/Ask'
import Custom from '../components/NestedRoutes/Custom'
import Observe from '../components/NestedRoutes/Observe'
import About from '../Pages/About'

import LandingPage from '../Pages/LandingPage'
import Login from '../Pages/Login'
import Pricing from '../Pages/Pricing'

const AllRoutes = () => {
  return (
    <Routes>

        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />

           {/* NESETED ROUTES */}  
      <Route path='/pricing' element={<Pricing />} >
           <Route index  element={<Ask />} />
           <Route path='ask' element={<Ask />} />
           <Route path='observe' element={<Observe />} />
           <Route path='custom' element={<Custom />} />
      </Route>
            {/* NESETED ROUTES */}  

        <Route path='/about' element={<About />} />
      
    </Routes>
  )
}

export default AllRoutes
