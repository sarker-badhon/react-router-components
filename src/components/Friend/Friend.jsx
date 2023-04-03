import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name,email,phone,id} = friend;
    return (
        <div className='friend'>
          <h2>{name}</h2>
          <p>Email:{email}</p>
          <p>phone:{phone}</p>
          <p><Link to={`/Friend/${id}`}>Show Details</Link></p>
        </div>
    );
};

export default Friend;