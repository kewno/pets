import React from 'react';
import './post.scss';
import Like from "../Like/Like";
import {NavLink} from "react-router-dom";
import {setPetsDetail} from "../../../redux/reducerPetsDetail";
import {useDispatch} from "react-redux";
import {toggleLike} from "../../../redux/reducerUser";

const Post = ({id, img, name, status, rank, ...attr}) => {
    let dispatch = useDispatch()
    //debugger
    let handleClick = (e) => {
        let elem = e.target;

        while (elem.className !== 'post-body__like' && elem.className !== 'post') { // elem.className !== 'post' || elem.className !== 'post-body__like'
            elem = elem.parentNode
            //console.log(elem)
        }

        if (elem.classList.contains('post-body__like')) {
            e.preventDefault();
        } else {
            dispatch(setPetsDetail(id))
        }
    }

    return (
        <NavLink to={`/pets-detail/${id}`} className='post' onClick={(e) => handleClick(e)}>
            <img alt='img' src={require(`../../../img/pets/${img}`)} className='post__img'/>
            <div className='post-body'>
                <div className='post-body__texts'>
                    <h3 className='post-body__name'>{name}</h3>
                    <p className='post-body__rank'>{rank}</p>
                </div>
                <div className='post-body__like' >
                    <Like id={id} toggleLike={toggleLike}/>
                </div>
            </div>
        </NavLink>

    // <div className='post' onClick={(e) => handleClick(e)}>
    //     <img alt='img' src={require(`../../../img/pets/${img}`)} className='post__img'/>
    //     <div className='post-body'>
    //         <div className='post-body__texts'>
    //             <h3 className='post-body__name'>{name}</h3>
    //             <p className='post-body__rank'>{rank}</p>
    //         </div>
    //         <div className='post-body__like' >
    //             <Like id={id} toggleLike={toggleLike}/>
    //         </div>
    //     </div>
    // </div>
    )
}
//onClick={() => toggleLike()} coll={coll} status={status} {/*</NavLink>*/}
export default Post