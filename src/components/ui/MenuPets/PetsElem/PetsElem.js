import React from 'react';
import './pets-elem.scss';
import {NavLink} from "react-router-dom";

const PetsElem = ({name, href, img, ...attr}) => {
    return (
        <NavLink to={href} className='pets-elem'>
            <div className='pets-elem__wrap-img'>
                <div className='pets-elem__img' dangerouslySetInnerHTML={{ __html: img }} />
            </div>
            <p className='pets-elem__name'>{name}</p>
        </NavLink>
        // <NavLink to={href} className='menu-pets-elem'>
        //     <div className='menu-pets-elem-img'>
        //         <div className='menu-pets-elem-img__img' dangerouslySetInnerHTML={{ __html: img }} />
        //     </div>
        //     <p className='menu-pets-elem__name'>{name}</p>
        // </NavLink>
    )
}

export default PetsElem