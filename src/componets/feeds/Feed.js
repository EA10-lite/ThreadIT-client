import React from 'react';
import { Link } from 'react-router-dom';
import './feeds.css';

import { HiOutlineDotsHorizontal } from 'react-icons/hi'

function Feed({ feed, user }) {
  return (
    <div className="app__feed">
        <div className="app__feed-container">
            <div className="app__feed-container__header">
                <div className="app__feed-header__user">
                    <img src={user.avatar} alt="" />
                    <Link to={`/profile/${user.username}`}> { user.username } </Link>
                </div>
                <div className="app__feed-header__btn">
                    <HiOutlineDotsHorizontal />
                </div>
            </div>
            <div className="app__feed-container__body">
                <img src={feed.urls} alt="" />
            </div>
            <div className="app__feed-container__footer"></div>
        </div>
    </div>
  )
}

export default Feed;