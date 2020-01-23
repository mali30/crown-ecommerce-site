import React from 'react'

import './header.styles.scss'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assests/crown.svg'

import { auth } from '../../firebase/firebase.utils'
    
const Header = ({ currentUser}) => (

    <div className='header'>
        <Link to="/">
            <Logo className='logo-container' to = "/" />
        </Link>
        <div className='options'>
            <Link to="/shop" className='option'  > SHOP </Link>
            <Link to="/shop" className='option'>CONTACT </Link>

            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}> SIGN OUT </div>
                    :
                    <Link className = 'option' to="signin"> SIGN IN</Link>
            }
        
        
        </div>
        
    </div>

)


export default Header