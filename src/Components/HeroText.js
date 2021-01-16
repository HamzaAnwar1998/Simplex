import React from 'react'
import { Icon } from 'react-icons-kit'
import { ic_arrow_forward } from 'react-icons-kit/md/ic_arrow_forward'
import { motion } from 'framer-motion'

const buttonVariants = {
    hover: {
        scale: 1.1,
        transition: {
            yoyo: Infinity
        }
    }
}

export const HeroText = () => {
    return (
        <motion.div className='HeroText-box'

            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1.5 }}>
            <motion.h1 className='heading'
            >A Better <br /> Pharmacy For <br /> Everyone</motion.h1>
            <br />
            <p>Your digital pharmacy like no other bringing health <br /> and wellness
            to your doorstep
            </p>
            <br />
            <motion.div className='btn-div'
                variants={buttonVariants}
                whileHover="hover">
                <span
                >Learn More</span>
                <span className='whitespace-span'><Icon icon={ic_arrow_forward} /></span>
            </motion.div>
        </motion.div>
    )
}
