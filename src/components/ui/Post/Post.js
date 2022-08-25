import React from 'react';
import './post.scss';
import Like from "../Like/Like";

const Post = ({img, name, status, rank, setLike, coll, ...attr}) => {
    return (
        <div className='post'>
            <img src={require(`../../img/${img}`)} className='post__img'/>
            <div className='post-body'>
                <div className='post-body-texts'>
                    <h3 className='post-body-texts__name'>{name}</h3>
                    <p className='post-body-texts__rank'>{rank}</p>
                </div>
                <div className='post-body__like'>
                    <Like coll={coll} status={status} setLike={setLike}/>
                </div>
            </div>
        </div>
    )
}

export default Post