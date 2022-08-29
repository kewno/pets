import React from 'react';
import './avatar.scss';

const Avatar = ({img, name, ...attr}) => {
    return (
        <div className='avatar'>
            {img ?
                <img src={require(`../../../img/${img}`)} alt='avatar' className='avatar__img' />
                :
                <div className='avatar-without-img'>
                    <p className='avatar-without-img__text'>{name ? name[0] : ''}</p>
                </div>
            }
        </div>
    )
}


export default Avatar