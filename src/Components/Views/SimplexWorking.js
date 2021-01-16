import React from 'react'
import '../../CSS/SimplexWorking.css'
import { Indicator4 } from '../Indicator4'
import pharmacy from '../../images/pharmacy.jpg'

export const SimplexWorking = () => {
    return (
        <div className='working-box'>
            <div className='leftside'>
                <Indicator4 />
                <div className='img'>
                    <img src={pharmacy} alt="" />
                </div>
            </div>
            <div className='rightside'>
                <div className='details-box'>
                    <h1>How Simplex <br />Pharmacy <br />Works?</h1>
                    <div className='small-text'>It's Simple!</div>
                    <div className='small-text'>Tell Your Doctor About Us</div>
                    <p>On your next visit tell the doctor you have chosen <br />
                    Simplex Pharmacy (Greenway Pharmacy in <br /> Doctor EMR System).</p>
                </div>
            </div>
        </div>
    )
}
