import React from 'react'
import '../../CSS/SaveEfforts.css'
import { Indicator2 } from '../Indicator2'
import { SaveEffortsText } from '../SaveEffortsText'
import saveTimeAndEfforts from '../../images/saveTimeAndEfforts.PNG'

export const SaveEfforts = () => {
    return (
        <div className='save-efforts-box'>
            <div className='leftside'>
                <Indicator2 />
                <SaveEffortsText />
            </div>
            <div className='rightside'>
                <img src={saveTimeAndEfforts} alt="" />
            </div>
        </div>
    )
}
