import React from 'react';
import './users.css';

import User from './User';

// mock data
import users from '../../data/users';

function Users() {
  return (
    <div className="app__users-container">
        <h3> Friend Requests </h3>
        { users.slice(0,3).map(user => (
          <User 
            key={user.id} 
            user={user.user} 
          />
        ))}
    </div>
  )
}

export default Users;