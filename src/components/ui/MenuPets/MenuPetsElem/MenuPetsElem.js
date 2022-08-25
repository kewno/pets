import React from 'react';
import './menu-pets-elem.scss';

const MenuPetsElem = ({name, img, ...attr}) => {
    return (
        <div className='menu-pets-elem'>
            <div className='menu-pets-elem-img'>
                <div className='menu-pets-elem-img__img' dangerouslySetInnerHTML={{ __html: img }} />
            </div>
            <p className='menu-pets-elem__name'>{name}</p>
        </div>
    )
}

export default MenuPetsElem