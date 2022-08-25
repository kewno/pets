import React from 'react';
import './icon.scss';

const Icon = ({icon, ...attr}) => {
    return (
        <div className='icon'>
            <div className='icon__img' dangerouslySetInnerHTML={{ __html: icon }} />
        </div>
    )
}

export default Icon