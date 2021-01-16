import React from 'react'
import { Indicator3 } from '../Indicator3'
import '../../CSS/Testimonials.css'
import { Icon } from 'react-icons-kit'
import { user } from 'react-icons-kit/feather/user'

export const Testimonials = () => {
    return (
        <div className='testimonial-box'>
            <div className='leftside'>
                <Indicator3 />
                <div className='user-testimonial-box'>
                    <div className='end'>
                        <div className='user-testimonial'>
                            <div className='text'><i>Simplex has the best pharmacy service hands down!
                            It was quick and easy and is perfect during this time when we all are
                            limiting our trips out of the house!</i>
                            </div>
                            <div className='user'>
                                <div className='user-icon'>
                                    <Icon icon={user} size={24} />
                                </div>
                                <div className='name-and-date'>
                                    <div className='name'>Patricia V Adlemen</div>
                                    <div className='date'>May 4, 2020</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='start'>
                        <div className='user-testimonial'>
                            <div className='text'><i>Simplex has the best pharmacy service hands down!
                            It was quick and easy and is perfect during this time when we all are
                            limiting our trips out of the house!</i>
                            </div>
                            <div className='user'>
                                <div className='user-icon'>
                                    <Icon icon={user} size={24} />
                                </div>
                                <div className='name-and-date'>
                                    <div className='name'>Patricia V Adlemen</div>
                                    <div className='date'>May 4, 2020</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='rightside'>
                <div className='details-box'>
                    <div className='small-text'>We're listening</div>
                    <h1>At Simplex <br />Pharmacy, <br />Patients Matter</h1>
                    <p>Find out what they are saying about Simplex.</p>
                </div>
            </div>
        </div>
    )
}
