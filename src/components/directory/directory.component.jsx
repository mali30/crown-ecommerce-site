import React from 'react';
import MenuItem from '../menu-items/menu-items.components'

import './directory.styles.scss'

class Directory extends React.Component{

     constructor(){
        super()
        this.state = {
            section :   [
                {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'shop/hats'
              },
              {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'shop/jackets'
              },
              {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'shop/sneakers'
              },
              {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: 'shop/womens',
                size : 'large',
              },
              {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens',
                size : 'large'
              }
            ]
        }
     }

     render(){
         return (
            <div className="directory-menu">
            {/* // map through sections  */}
            {/* destructing off section object instead of having to type
            section.id section.image section.blah */}
            {
                this.state.section.map
                // gonna refacor this line to more ES6 style
                // ( ({title, imageUrl, id , size }) => 
                (( { id, ...everythingElse} ) => 
                // (<MenuItem key={id} title = {title}  image={imageUrl} size={size} />))
                (<MenuItem key={id} {...everythingElse}/>))

            
            }
            </div>
         )
     }

}


export default Directory;