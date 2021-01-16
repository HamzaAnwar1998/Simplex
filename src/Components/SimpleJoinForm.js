import React from 'react'
import { motion } from 'framer-motion'

const formVariants = {
    hidden: {
        y: 800
    },
    visible: {
        y: 0,
        transition: {
            delay: 1.5,
            type: 'spring',
            stiffness: 60,
            when: 'beforeChildren'
        }
    }
}

const childVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.1,
            duration: 0.35
        }
    }
}

const buttonVariants = {
    hover: {
        scale: 1.1,
        transition: {
            yoyo: Infinity
        }
    }
}

export const SimpleJoinForm = () => {
    return (
        <motion.div className='form-div'
            variants={formVariants}
            initial="hidden"
            animate="visible">
            <motion.h1 variants={childVariants}>Join Simplex Pharmacy</motion.h1>
            <motion.p variants={childVariants}>You can join simplex pharmacy as Doctor, Patient and Vendor</motion.p>
            <br />
            <motion.div className='form' variants={childVariants}>
                <form autoComplete="off" className='simplex-form'>
                    <div className='patient-div'>
                        <input type="text" placeholder="Patient" />
                    </div>
                    <div className='others-div'>
                        <span><input type="text" placeholder="Your Name" /></span>
                        <span><input type="text" placeholder="Mobile No" /></span>
                        <span><input type="text" placeholder="Email" /></span>
                        <motion.span
                            variants={buttonVariants} whileHover="hover"><input type="submit" value="Join Now" className='form-submit-btn' /></motion.span>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    )
}
