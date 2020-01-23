import React from 'react'


import './custom-button.styles.scss'

const CustomButton = ({ children,  isGoogleSignInOn, ...otherProps}) => (
    <div>
        {/* {`${console.log("this is the children", children)}`} */}
        <button className={`${isGoogleSignInOn ? 'google-sign-in' : ''} custom-button`}
            {...otherProps}>
        {children}
    </button>
    </div>
   
)

export default CustomButton;