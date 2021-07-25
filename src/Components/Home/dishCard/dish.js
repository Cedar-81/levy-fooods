import React from 'react'

//img imports
import fImg1 from '../../../Assets/fImg1.png'
import fImg2 from '../../../Assets/fImg2.png'
import fImg3 from '../../../Assets/fImg3.png'
import fImg4 from '../../../Assets/fImg4.png'
import sbi from '../../../Assets/shopping_basket2.png'

//css styling
import './dish.css'

function Dish({img}) {
    return (
        <div className='dishCard'>
            
            <div className='tdCardHeader'>
                
                <div className='price'><h4>$77</h4></div>
                
                <div className='atc'><img className='foodImg' alt='foodImg' src={img} /> </div>   
            </div>

            <div className='tdCardBody'>
                <h4>Rice and Stew</h4>
                <p>with vegetable</p>
            </div>
            
            <div className='tdCardFooter'>
                <img src={sbi} alt='shopping basket' />
            </div>
        
        </div>
    )
}

export default Dish
