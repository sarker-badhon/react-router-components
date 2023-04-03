import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from '../singlePost/singlePost';


const Posts = () => {
    const posts= useLoaderData()
    return (
        <div>
            <h1> current post :{posts.length}</h1>
            <div>
                {
                    posts.map(post => <SinglePost
                    
                        key={post.id}
                        post ={post}
                    
                    ></SinglePost> )
                }
            </div>
        </div>
    );
};

export default Posts;