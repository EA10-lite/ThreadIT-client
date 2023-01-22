import React from 'react';
import './users.css';
import { Link } from 'react-router-dom';

function User({ user }) {
  return (
    <div className="app__user">
      <div className="app__user-info">
        <img src={user.avatar} alt="" />
        <Link to={`/profile/${user.username}`}> { user.username } </Link>
      </div>
      <button type="button" className="app__user-btn__add"> Add </button>
    </div>
  )
}

export default User;