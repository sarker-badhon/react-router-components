import React from 'react';
import './SinglePost.css'

const SinglePost = ({post}) => {
    // console.log(post);
    const {id,title,userId}=post
    return (
        <div className='post'>
            <h3>Id:{id}</h3>
            <p>Title:{title}</p>
            <p>UserId:{userId}</p>
        </div>
    );
};

export default SinglePost;