import React from 'react'
import {withRouter} from 'react-router-dom'
import './menu-items.styles.scss'

const MenuItem = ({title , imageUrl , size , history, linkUrl, match }) => {
    // dynamically making styles on components
    console.log("this is linkURL" , linkUrl);
    console.log('this is match', match);
    console.log('this is history', history);
    
    // console.log('this is the image' , image)
    return(
    <div className = {`${size} menu-item`}
     onClick = {() => history.push( `${match.url}${linkUrl}`)}>

         <div className = 'background-image' style =
          {{backgroundImage: `url(${imageUrl})`
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

}

/* getting location,match and history props we need
 for linkage to different components on home page.
*/
export default withRouter(MenuItem)
