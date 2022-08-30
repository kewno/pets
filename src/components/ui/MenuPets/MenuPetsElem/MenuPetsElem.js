import React from 'react';
import './menu-pets-elem.scss';
import {NavLink} from "react-router-dom";

const MenuPetsElem = ({name, href, img, ...attr}) => {
    return (
        <NavLink to={href} className='menu-pets-elem'>
            <div className='menu-pets-elem-img'>
                <div className='menu-pets-elem-img__img' dangerouslySetInnerHTML={{ __html: img }} />
            </div>
            <p className='menu-pets-elem__name'>{name}</p>
        </NavLink>
    )
}

export default MenuPetsElem