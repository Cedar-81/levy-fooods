import React from 'react';


//img imports
//logo img
import logo from '../../Assets/Levy Fooods logo.png';
//icon imgs
import shopping_basket from '../../Assets/shopping_basket.png';
import search from '../../Assets/Search.png';

//css import
import './nav.css'

function Nav() {
    return (
        <div className='navBar'>

            <div className='logo'>Levy F<span>ooo</span>ds</div>
            <div className='navItems'>
                <p className='home'>HOME</p>
                <p className='menu'>MENU</p>
                <p className='blogs'>BLOGS</p>
                <p className='about'>ABOUT</p>
                <p className='contact'>CONTACT</p>
                <input  className='search' placeholder='SEARCH FOODS'></input>
                <img className='searchImg' src={search} alt='search icon' />
            </div>
            <div className='navItems right'>
                <img src={shopping_basket} alt='shopping basket icon' />
                <div className='signupBtn' >SIGN UP</div>
            </div>
            
        </div>
    )
}

export default Nav
