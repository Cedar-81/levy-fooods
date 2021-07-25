import React from 'react'

//img imports
import logo from '../../Assets/Levy Fooods logo.png'

//css styling
import './footer.css'

function Footer() {
    return (
        <div className='footerComp'>
            <div className='urLogo'>
                <img src={logo} alt='logoImg' className='logo' />
            </div>
            <div className='newsletter'>
                <h2>Eat healthy...</h2>
                <h3>signup for our news letter to get healthy tips on you food lifestyle.</h3>
                <input type='text' placeholder='enter email' />
                <div className='subBtn'><h4>Subscribe</h4></div>
            </div>
            <div className='contactForm'>
                <h2>Leave a Feedback</h2>
                <textarea placeholder='enter feedback' />
            </div>
        </div>
    )
}

export default Footer
