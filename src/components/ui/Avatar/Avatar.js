import React from 'react';
import './avatar.scss';

const Avatar = ({img, name, ...attr}) => {
    //debugger
    let nick = name ? name.split(' ') : undefined;
    return (
        <div className='avatar'>
            {img ?
                <img src={require(`../../../img/ui/${img}`)} alt='avatar' className='avatar__img' />
                :
                <div className='avatar-without'>
                    <p className='avatar-without__text'>{nick.length === 2 ? `${nick[0][0]}${nick[1][0]}` : name[0]}</p>
                </div>
            }
        </div>
    )
}


export default Avatar