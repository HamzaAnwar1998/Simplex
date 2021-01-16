import React from 'react'
import '../../CSS/Footer.css'
import { Icon } from 'react-icons-kit'
import { ic_local_pharmacy } from 'react-icons-kit/md/ic_local_pharmacy'
import heartbeats from '../../images/heartbeats.PNG'
import { twitter } from 'react-icons-kit/icomoon/twitter'
import { facebook } from 'react-icons-kit/icomoon/facebook'
import { instagram } from 'react-icons-kit/fa/instagram'

export const Footer = () => {
    return (
        <div className='footer-box'>
            {/* logo */}
            <div className='logo'>
                <div className='logo-icon'>
                    <Icon icon={ic_local_pharmacy} size={40} />
                </div>
                <div className='logo-text'>SIMPLEX</div>
            </div>
            {/* contact */}
            <div className='contact-box'>
                <div className='heading'>Contact Info</div>
                <br />
                <div className='info'>
                    Simple Pharmacy Inc. 644 Rogers <br /> Ave, Brooklyn, NY 11226, United States
                </div>
                <br />
                <div className='info'>Email: info@simplexpharmacy.com</div>
                <div className='info'>Phone: 718-462-2029</div>
                <div className='info'>Fax: 718-462-2026</div>
            </div>
            {/* links */}
            <div className='contact-box'>
                <div className='heading'>Quick Links</div>
                <br />
                <div className='info'>
                    Contact Us
                </div>
                <div className='info'>Careers</div>
                <br />
                <div className='follow-us-links'>
                    <span className='links-box'>
                        <Icon icon={facebook} />
                    </span>
                    <span className='links-box'>
                        <Icon icon={twitter} />
                    </span>
                    <span className='links-box'>
                        <Icon icon={instagram} />
                    </span>
                </div>
            </div>
            {/* img */}
            <div className='img'>
                <img src={heartbeats} alt="" />
            </div>
        </div>
    )
}
