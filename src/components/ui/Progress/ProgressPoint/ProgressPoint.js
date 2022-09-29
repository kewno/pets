import React from 'react';
import './progress-point.scss';

const ProgressPoint = ({className, ...attr}) => {
    let image = null
    if (className === 'completed' || className === 'completed-partially') image = 'progress-success.png'
    else if (className === 'cancellation') image = 'progress-сross.png'
    else image = null

    //debugger
    return (
        <div className={`progress-point progress-point_${className}`}>
            {image ?
                <img src={require(`../../../../img/ui/${image}`)} className="progress-point__icon" alt='icon'/>
                :
                null
            }
        </div>
    )
}

export default ProgressPoint