import React from 'react'
import { Icon } from 'react-icons-kit'
import { ic_local_pharmacy } from 'react-icons-kit/md/ic_local_pharmacy'
import { motion } from 'framer-motion'
import { menu } from 'react-icons-kit/feather/menu'

const containerVariants = {
    hidden: {
        y: -500
    },
    visible: {
        y: 0,
        transition: {
            delay: 1, type: 'spring', stiffness: 60
        }
    }
}

const toggleNavbar = () => {
    const navbox = document.getElementById('navbox');
    const linksBox = document.getElementById('linksBox');
    const toggler = document.getElementById('toggler');
    navbox.classList.toggle('active');
    linksBox.classList.toggle('active')
}

export const Navbar = () => {
    return (
        <motion.div className='navbox' id='navbox'
            variants={containerVariants} initial="hidden"
            animate="visible">
            <div className='logo'>
                <div className='logo-icon'>
                    <Icon icon={ic_local_pharmacy} size={20} />
                </div>
                <div className='logo-text'>SIMPLEX</div>
            </div>
            <div className='links-box' id='linksBox'>
                <div className='links'>
                    <span>Home</span>
                    <span>For Providers</span>
                    <span>For Manufacturers</span>
                    <span>Spetiality</span>
                    <span>About Us</span>
                </div>
            </div>
            <div className='toggler' id='toggler' onClick={() => toggleNavbar()}>
                <span>
                    <Icon icon={menu} size={20} />
                </span>
            </div>
        </motion.div>
    )
}
