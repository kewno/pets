import React from 'react';
import './users.scss';
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";

const Users = ({users, func, ...attr}) => {
    return (
        <div className='users'>
            <div className='users-elems'>
                {users.map(el => {
                    return <div className='users-elems__elem'>
                                <Avatar name={el.name} />
                           </div>
                })}
                <div className='users-add users-elems__elem' onClick={() => {func()}}>
                    <p className='users-add__icon'>+</p>
                </div>
            </div>
            <div className='users__btn'>
                <Button>Напиши сейчас</Button>
            </div>
        </div>
    )
}

export default Users