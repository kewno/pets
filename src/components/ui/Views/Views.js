import React from 'react';
import './views.scss';


const Views = ({like, views, number, day, ...attr}) => {
    //let likeHeight = {height: `${like * 0.5}px`};
    //let viewsHeight = {height: `${views * 0.5}px`};
    //Math.max()
    let viewsHeight = {height: `${(views * 100 / (Math.max(views, like + 2))) * 2}px`};
    let likeHeight = {height: `${(like * 100 / (Math.max(views, like + 2))) * 2}px`};
    return (
        <div className='views'>
            <div className='views-scale'>
                <div style={likeHeight} className='views-scale__elem views-scale__elem_like'></div>
                <div style={viewsHeight} className='views-scale__elem views-scale__elem_views'></div>
            </div>
            <div className='views-date'>
                <p className='views-date__number'>{number}</p>
                <p className='views-date__day'>{day}</p>
            </div>
        </div>
    )
}

export default Views