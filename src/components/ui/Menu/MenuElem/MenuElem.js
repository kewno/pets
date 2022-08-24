import React from 'react';
import './menu-elem.scss';
import {NavLink} from "react-router-dom";

const MenuElem = ({id, href, children, icon, ...attr}) => {
    return (
        <NavLink
            key={id}
            className={'menu-elem'}
            //onClick={()=> handleClick(id)}
            to={href}>
            <div dangerouslySetInnerHTML={{ __html: icon }} />
            {/*dangerouslySetInnerHTML={{__html: icon}}*/}
        </NavLink>
    )
}

export default MenuElem