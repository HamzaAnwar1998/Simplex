import React from 'react'
import { Icon } from 'react-icons-kit'
import { ic_arrow_forward } from 'react-icons-kit/md/ic_arrow_forward'
import { motion } from 'framer-motion'

const cardVariants = {
    hover: {
        scale: 1.1,
        // y: -20,
        // x: -20,
        transition: {
            type: 'spring',
            stiffness: 60,
        }
    }
}

export const Profiency = () => {
    return (
        <div className='profiency-box'>

            <div className='card active'>
                <div className='icon-div'>
                    <i className="fas fa-sync"></i>
                </div>
                <div className='details-box'>
                    <div className='details-heading'>Refill Management</div>
                    <div className='details-para'>
                        We sync all of your medication and schedule your refills in a timely
                        manner so you always recieve your prescription on time.
                    </div>
                    <div className='readmore-div'>
                        <span className='readmore'>Read More</span>
                        <span className='whitespace-span2'><Icon icon={ic_arrow_forward} /></span>
                    </div>
                </div>
            </div>

            <motion.div className='card'
                variants={cardVariants} whileHover="hover">
                <div className='icon-div'>
                    <i className="fas fa-wallet"></i>
                </div>
                <div className='details-box'>
                    <div className='details-heading'>Financial Advisors</div>
                    <div className='details-para'>
                        High Co-Pays? No worries, we have got you covered. We work with several organizations
                        and programs to help you lower your out of pocket costs.
                    </div>
                    <div className='readmore-div'>
                        <span className='readmore'>Read More</span>
                        <span className='whitespace-span2'><Icon icon={ic_arrow_forward} /></span>
                    </div>
                </div>
            </motion.div>
            <motion.div className='card'
                variants={cardVariants} whileHover="hover">
                <div className='icon-div'>
                    <i className="fas fa-shipping-fast"></i>
                </div>
                <div className='details-box'>
                    <div className='details-heading'>Free Delivery</div>
                    <div className='details-para'>
                        We offer free same day delivery to your home or work in the five boroughs and long
                        island.
                    </div>
                    <div className='readmore-div'>
                        <span className='readmore'>Read More</span>
                        <span className='whitespace-span2'><Icon icon={ic_arrow_forward} /></span>
                    </div>
                </div>
            </motion.div>
            <motion.div className='card'
                variants={cardVariants} whileHover="hover">
                <div className='icon-div'>
                    <i className="fas fa-school"></i>
                </div>
                <div className='details-box'>
                    <div className='details-heading'>Patient Education <br /><br /></div>
                    <div className='details-para'>
                        Have question? We have the answers. Our highly trained pharmacists and staff
                        are available to call, text or video chat you whenever you need to ensure you.
                    </div>
                    <div className='readmore-div'>
                        <span className='readmore'>Read More</span>
                        <span className='whitespace-span2'><Icon icon={ic_arrow_forward} /></span>
                    </div>
                </div>
            </motion.div>
            <motion.div className='card'
                variants={cardVariants} whileHover="hover">
                <div className='icon-div'>
                    <i className="fas fa-ticket-alt"></i>
                </div>
                <div className='details-box'>
                    <div className='details-heading'>Prior Authorization Support</div>
                    <div className='details-para'>
                        We have a dedicated team of insurance specialists that work closely with you
                        and your doctor to assist in getting your medication approved under your insu.
                    </div>
                    <div className='readmore-div'>
                        <span className='readmore'>Read More</span>
                        <span className='whitespace-span2'><Icon icon={ic_arrow_forward} /></span>
                    </div>
                </div>
            </motion.div>
            <motion.div className='card'
                variants={cardVariants} whileHover="hover">
                <div className='icon-div'>
                    <i className="fas fa-user-md"></i>
                </div>
                <div className='details-box'>
                    <div className='details-heading'>Reimbursement Specialist</div>
                    <div className='details-para'>
                        No insurance? No problem. We offer competitive pricing and employ a team of
                        specialist that will help you obtain your medication through free trial programs.
                    </div>
                    <div className='readmore-div'>
                        <span className='readmore'>Read More</span>
                        <span className='whitespace-span2'><Icon icon={ic_arrow_forward} /></span>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
