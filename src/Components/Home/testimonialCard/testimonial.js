import React from 'react'

//img import 
import rating from '../../../Assets/rating.png'

//css stylesheet
import './testimonial.css'

//testimonial img
import pf1 from '../../../Assets/pf1.png'
import pf2 from '../../../Assets/pf2.png'
import pf3 from '../../../Assets/pf3.png'

function Testimonial({img, name}) {
    return (
        <div className='tContent'>

            <div className='header'>
                <h2>What Our Customers Say</h2>
                <h3><i>to us our customers are our priority and their opinions are all that matters.</i></h3>
            </div>

            <div className='cards'>
                <div className='card'>
                    <div className='profileImg'><img src={pf1} className='pImg' alt='profile' /></div> 
                    <div className='cardContent'>
                        <h4 className='content'>Cedar</h4>
                        <img src={rating} className='rating content' alt='rating' />
                        <p className='content'>
                            Their dishes are just superb and one of a kind everything is just perfect.
                        </p>
                    </div>
                </div>
                <div className='card center'>
                    <div className='profileImg'><img src={pf2} className='pImg ' alt='profile' /></div> 
                    <div className='cardContent'>
                        <h4 className='content'>Ahmed</h4>
                        <img src={rating} className='rating content' alt='rating' />
                        <p className='content'>
                            Their dishes are just superb and one of a kind everything is just perfect.
                        </p>
                    </div>
                </div>
                <div className='card'>
                    <div className='profileImg'><img src={pf3} className='pImg' alt='profile' /></div> 
                    <div className='cardContent'>
                        <h4 className='content'>Prim</h4>
                        <img src={rating} className='rating content' alt='rating' />
                        <p className='content'>
                            Their dishes are just superb and one of a kind everything is just perfect.
                        </p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Testimonial
