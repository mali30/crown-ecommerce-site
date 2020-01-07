import React from 'react'
import './menu-items.styles.scss'

const MenuItem = ({title , image , size }) => (
    // dynamically making styles on components
    <div className = {`${size} menu-item`}>

         <div className = 'background-image' style = {{
        backgroundImage: `url(${image})`
    }}  /> 
    <div className = 'content'>
        <h1 className='title'> 
            {title.toUpperCase()}
            </h1>
            <span className='subtitle'>
                {title.toUpperCase()}
            </span>
    </div>
</div>



)

export default MenuItem