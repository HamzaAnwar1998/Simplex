import React from 'react'
import { Indicators } from './Indicators'
import { HeroText } from './HeroText'
import { HeroImage } from './HeroImage'

export const Hero = () => {
    return (
        <div className='hero-box'>
            {/* 3 components will embed inside it one is indicators 2nd is hero text and 3rd is mobile
            image with whole website */}
            <div className='leftside'>
                <Indicators />
                <HeroText />
            </div>
            <div className='rightside'>
                <HeroImage />
            </div>
        </div>
    )
}
