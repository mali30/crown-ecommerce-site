import React from 'react'

import './header.styles.scss'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assests/crown.svg'

const Header = () => (

    <div className='header'>
        <Link to="/">
            <Logo className='logo-container' />
        </Link>
        <div className='options'>
            <Link to="/shop" className='option' SHOP > SHOP </Link>
            <Link to="/shop" className='option'>CONTACT </Link>
        
        
        </div>
        
    </div>

)


export default Header