import React from 'react'

//css styling
import './menu.css'

function Menu({icon, name}) {
    return (
        <div className='menuCards'>
            <div className='menuCard' >
                <img src={icon} alt={name} />
                <p>{name}</p>
            </div>
        </div>
    )
}

export default Menu
