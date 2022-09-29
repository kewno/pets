import React from 'react';
import './pets-elem.scss';
import {setTogglePets} from "../../../../redux/reducerTogglePets";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";

const PetsElem = ({name, id, img, href, ...attr}) => {

    let dispatch = useDispatch()

    let handleClick = (id) => {
        dispatch(setTogglePets(id))
    }

    return (
        // <NavLink to={id} className='pets-elem' onClick={() => handleClick(id)}>
        //     <div className='pets-elem__wrap-img'>
        //         <div className='pets-elem__img' dangerouslySetInnerHTML={{ __html: img }} />
        //     </div>
        //     <p className='pets-elem__name'>{name}</p>
        // </NavLink>
        <div >
            <label className={'pets-elems'} >
                <input type='checkbox' id={id} onClick={() => handleClick(id)}/>
                <div className='pets-elem' >
                    <div className='pets-elem__wrap-img'>
                        <div className='pets-elem__img' dangerouslySetInnerHTML={{ __html: img }} />
                    </div>
                    <p className='pets-elem__name'>{name}</p>
                </div>
            </label>
        </div>
    )
}

export default PetsElem