import React from 'react';
import './menu.scss';
import MenuElem from "./MenuElem/MenuElem";

const Menu = ({elems, ...attr}) => {
    return (
        <div className='menu'>
            {elems.map(el => {
                return <div key={el.id} className='menu__elem'>
                            <MenuElem
                                id={el.id}
                                icon={el.icon}
                                href={el.href}
                                active={el.active}>{el.name}</MenuElem>
                        </div>
            })}
        </div>
    )
}

export default Menu