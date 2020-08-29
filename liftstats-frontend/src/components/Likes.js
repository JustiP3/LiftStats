import React from 'react'

export default function Likes(props)  {
    
        return(
            <div>
                <h4>Likes {props.likes}</h4>
                <button onClick={props.handleClick}>Like</button>
            </div>
        )
    
}