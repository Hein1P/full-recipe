import React from 'react'
import Veggie from '../components/Veggie'
import Popular from '../components/Popular'
import { motion } from 'framer-motion'

function Home() {
    return (
        <div>
            <Veggie />
            <Popular />
        </div>
    )
}

export default Home