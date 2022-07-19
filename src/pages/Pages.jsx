import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Cuisine from './Cuisine'
import Home from './Home'
import Recipe from './Recipe'
import Searched from './Searched'

function Pages() {
    const location = useLocation()
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cuisine/:type' element={<Cuisine />} />
            <Route path='/search/:search' element={<Searched />} />
            <Route path='/recipe/:name' element={<Recipe />} />
        </Routes>

    )
}

export default Pages