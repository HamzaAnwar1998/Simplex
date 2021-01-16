import React from 'react'
import { motion } from 'framer-motion'

export const Indicators = () => {
    return (
        <motion.div className='indicators-box'
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1.5 }}>
            <div className='indicators active'></div>
            <div className='indicators'></div>
            <div className='indicators'></div>
            <div className='indicators'></div>
            <div className='indicators'></div>
            <div className='indicators'></div>
        </motion.div>
    )
}
