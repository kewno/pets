import React from 'react';
import './date-time.scss';
import Icon from "../Icon/Icon";

const DateTime = ({headline, text, icon, ...attr}) => {
    return (
        <div className='date-time'>
            <div className='date-time__texts'>
                <div className="date-time__icon">
                    <Icon icon={icon}/>
                </div>
                <p className='date-time__text'>{text}</p>
            </div>
            <p className='date-time__headline'>{headline}</p>
        </div>
    )
}

export default DateTime
