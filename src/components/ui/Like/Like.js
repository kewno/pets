import React from 'react';
import './like.scss';
import {useDispatch, useSelector} from "react-redux";
import {toggleLike} from "../../../redux/reducerUser";


const Like = ({id, ...attr}) => {

    let like = useSelector(state => state.reducerUser.likes.filter(el => el.id === id))[0]
    //console.log(like.status)
    let dispatch = useDispatch()
    let handleClick = () => {
        dispatch(toggleLike(id))
    }

    return (
        <div className={`like ${like.status ? 'like_active' : null}`} onClick={() => handleClick()}>
            <p className='like__text'>{`${like.coll} лайка`}</p>
            <div className='like__img'>
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.99609 15.5C8.99609 15.5 16.9961 9.93631 16.9961 4.66032C16.9961 -0.615631 9.89511 -1.01304 8.99609 4.26976C8.09704 -1.01304 0.996094 -0.60878 0.996094 5.07143C0.996094 10.7517 8.99609 15.5 8.99609 15.5Z" stroke="#F16063" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    )
}
//onClick={() => setLike(like.status)}
export default Like