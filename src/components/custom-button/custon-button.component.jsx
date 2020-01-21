import React from 'react'


import './custom-button.styles.scss'

const CustomButton = ({ children, ...otherProps }) => (
    <div>
        {/* {`${console.log("this is the children", children)}`} */}
    <button className="custom-button" {...otherProps}>
        {children}
    </button>
    </div>
   
)

export default CustomButton;