import React from 'react';
import './post.scss';
import Like from "../Like/Like";
//import img from '../../../img'

const Post = ({img, name, status, rank, setLike, coll, ...attr}) => {
    return (
        <div className='post'>
            <img alt='img' src={require(`../../../img/ui/${img}`)} className='post__img'/>
            <div className='post-body'>
                <div className='post-body__texts'>
                    <h3 className='post-body__name'>{name}</h3>
                    <p className='post-body__rank'>{rank}</p>
                </div>
                <div className='post-body__like'>
                    <Like coll={coll} status={status} setLike={setLike}/>
                </div>
            </div>
        </div>
    )
}

export default Post