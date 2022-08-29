import React from 'react';
import './icon.scss';

const Icon = ({icon, background, ...attr}) => {
    //debugger
    return (
        <div className='icon' style={background ? {background: `linear-gradient(${background});`} : null}>
            <div className='icon__img' dangerouslySetInnerHTML={{ __html: icon }} />
        </div>
    )
}//='225deg, #D665FF 0%, #4C6FFF 100%' // <div className='icon' style={background ? {background: `linear-gradient(${background});`} : null}>
//<div className='icon' style={{background: `linear-gradient(${background});`}}>
export default Icon