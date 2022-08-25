import React from 'react';
import './comment.scss';
import Avatar from "../Avatar/Avatar";

const Comment = ({id, img, isOnline, name, quote, time, children, func, ...attr}) => {
    return (
        <div className='comment' onClick={() => func}>
            <div className='comment-head'>
                <div className='comment-head-img'>
                    {isOnline ?
                        <div className='comment-head-img__online'></div>
                        :
                        null
                    }
                    <Avatar name={name} img={img}/>
                </div>
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