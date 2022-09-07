import React from 'react';
import './progress.scss';


const Progress = ({headline, headProgress, percent = 69, ...attr}) => {
    return (
        <div className='progress'>
            <div className='progress-ellipse'>
                <p className='progress-ellipse__percent'>{`${percent}%`}</p>
                <svg width="254" height="254" viewBox="0 0 254 254" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="127" cy="127" r="117" stroke="#334155" strokeWidth="20"/>
                    <path d="M209.731 209.731C198.867 220.596 185.969 229.214 171.774 235.094C157.579 240.974 142.365 244 127 244C111.635 244 96.4209 240.974 82.2258 235.094C68.0307 229.214 55.1327 220.596 44.2683 209.731" stroke="#F16063" strokeWidth="20" strokeLinecap="round"/>
                    <path d="M244 127C244 142.365 240.974 157.579 235.094 171.774C229.214 185.969 220.596 198.867 209.731 209.731" stroke="url(#paint0_linear_3601_1837)" strokeWidth="20" strokeLinecap="round"/>
                    <path d="M127 10C142.365 10 157.579 13.0263 171.774 18.9061C185.969 24.7859 198.867 33.4041 209.732 44.2685C220.596 55.133 229.214 68.031 235.094 82.2261C240.974 96.4211 244 111.635 244 127" stroke="#66CB9F" strokeWidth="20" strokeLinecap="round"/>
                    <defs>
                        <linearGradient id="paint0_linear_3601_1837" x1="244" y1="10" x2="10" y2="244" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFEF5E"/>
                            <stop offset="1" stopColor="#F7936F"/>
                        </linearGradient>
                    </defs>
                </svg>

            </div>
            <div className='progress-head'>
                <h2 className='progress-head__headline'>{headline}</h2>
                {headProgress.map(el => {
                    return <div className='progress-head__elem'>
                        <img alt='point' src={require(`../../../img/${el.img}`)} className='progress-head__img'/>
                        <p className='progress-head__text'>{el.text}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Progress