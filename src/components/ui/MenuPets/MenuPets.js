import React from 'react';
import './menu-pets.scss';
import MenuPetsElem from "./MenuPetsElem/MenuPetsElem";

const MenuPets = ({elems, ...attr}) => {
    return (
        <div className='menu-pets'>
            {elems.map(el => {
                return <MenuPetsElem name={el.name} img={el.img} />
            })}
        </div>
    )
}

export default MenuPets