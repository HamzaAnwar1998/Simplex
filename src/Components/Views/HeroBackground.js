import React from 'react'
import '../../CSS/HeroBackground.css'
import { Navbar } from '../Navbar'
import { Hero } from '../Hero'

export const HeroBackground = () => {
    return (
        <div className='hero-background'>
            <Navbar/>
            <Hero/>
        </div>
    )
}
