import React from 'react';
import './menu-pets.scss';
import PetsElem from "./PetsElem/PetsElem";

const MenuPets = ({elems, ...attr}) => {
    return (
        <div className='menu-pets'>
            {elems.map(el => {
                return <PetsElem name={el.name} href={el.href} img={el.img} />
            })}
        </div>
    )
}

export default MenuPets