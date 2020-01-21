import React from 'react';

import './collection-preview-styles.scss'

import CollectionItem from '../collection-item/collection-item.component'

/*
    This component shows the first four clothing items on each page and then passes those 
    items to the CollectionItem component
*/
const CollectionPreview = ({title, items}) => (

   
            <div className = 'collection-preview'>
                <h1 className = 'title'>{title.toUpperCase()}</h1>
                <div className = 'preview'>

                {
                    items
                    .filter( (item,idx) => idx < 4)
                    .map(( {id , ...otherItemProps} )  => (
                        < CollectionItem key={id} {...otherItemProps} />
                    ))
                
                }
                

            </div>
        </div>
  

);
 
export default CollectionPreview;