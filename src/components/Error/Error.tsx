import React from 'react'
import { NavLink } from 'react-router-dom'


export interface ErrorProps {}

const Error: React.FC<ErrorProps> = () => {
    return (
        <div className='error'>
            <h2> Whoops! Looks like this path doesn't exist. Click the button to go back to the main page 🎨 </h2>
            <NavLink className='go-back' to='/'>
               <button>Go Back</button>
            </NavLink>
        </div>
    )
}

export default Error