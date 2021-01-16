import React from 'react'
import website from '../images/website.PNG'
import { motion } from 'framer-motion'

export const HeroImage = () => {
    return (
        <motion.div className='margin-right'
            initial={{ x: '100vw' }} animate={{ x: 0 }} transition={{ delay: 1, type: 'spring', stiffness: 60 }}>
            <div className='img-div'>
                <img src={website} alt="" />
            </div>
        </motion.div>
    )
}
