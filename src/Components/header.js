import React from 'react';
import {Link} from 'react-router-dom'


const Header =()=>{
    return(
        <header>
        <div className="flexbox-container">
            <Link className="logo" to='/'>
                <span>
                </span>
            </Link>
            <nav>
            <Link className='navLink' to='/teams'>Teams</Link>
            </nav>
        </div>
        </header>
    )
}

export default Header;