import React from 'react'
import '../../CSS/Great.css'
import { Indicator1 } from '../Indicator1';
import { Profiency } from '../Profiency';

export const Great = () => {
    return (
        <div className='great-box'>
            <div className='leftside'>
                <Indicator1 />
            </div>
            <div className='rightside'>
                <h1>Few Things We Are Great at</h1>
                <Profiency />
            </div>
        </div>
    )
}
