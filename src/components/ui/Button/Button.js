import React from 'react';
import {NavLink} from "react-router-dom"
import './button.scss';

const Button = ({id, href, disable, children, func, ...attr}) => {
    let buttonClass = 'btn__elem';
    if (disable)
        buttonClass = 'btn__elem btn__elem_disable';

    return (
        <div className='btn'>
            {href ?
                <NavLink onClick={func} className={buttonClass} to={`/${href}`}>{children}</NavLink>
                :
                <button onClick={func} className={buttonClass}>{children}</button>
            }
        </div>
    )

}
export default Button