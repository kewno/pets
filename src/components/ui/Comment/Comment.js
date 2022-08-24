import React from 'react';
import './comment.scss';

const Comment = ({id, img, name, quote, time, children, func, ...attr}) => {
    return (
        <div className='comment' onClick={() => func}>
            <div className='comment-head'>
                <img src={''} className='comment-head__img'/>
                <div className='comment-head-texts'>
                    <h4 className='comment-head-texts__name'>{name}</h4>
                    <p className='comment-head-texts__quote'>{quote}</p>
                </div>
                <p className='comment-head__time'>{time}</p>
            </div>
            <p className='comment-text'>{children}</p>
        </div>
    )
}

export default Comment