import React from 'react'

import './collection-item.styles.scss'

// will display the picture, name , and price of images
const CollectionItem = ( {id, name, price, imageUrl}) => (
    <div className= 'collection-item'>
        {/* // holds image */}
        <div className = 'image'
        style = {{
            backgroundImage : `url(${imageUrl})`
        }}
        />

        <div className = 'collection-footer'>
            
        <span className = 'name'> {name} </span>
        <span className = 'price'> {price} </span>
        
        </div>
        </div>

     


)

export default CollectionItem