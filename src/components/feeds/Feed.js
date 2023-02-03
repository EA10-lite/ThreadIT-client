import React from 'react';
import { Link } from 'react-router-dom';
import './feeds.css';

// icons
import { BsChat } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { MdOutlineShare, MdOutlineLocationOn} from 'react-icons/md';

// images


function Feed({ feed, user }) {
  return (
    <div className="app__feed">
        <div className="app__feed-container">
            <div className="app__feed-container__header">
                <div className="app__feed-header__user">
                    <img src={user.avatar} alt="" />
                    <div className="app__feed-header-user-details">
                        <Link to={`/profile/${user.username}`}> { user.username } </Link>
                        <div className="app__feed-location">
                            <MdOutlineLocationOn />
                            <p> { feed?.location } </p>
                        </div>
                    </div>
                </div>
                <div className="app__feed-header__btn">
                    <HiOutlineDotsHorizontal />
                </div>
            </div>
            <div className="app__feed-container__body">
                <img src={feed.urls} alt="" />
            </div>
            <div className="app__feed-container__footer">
                <div className='app__feed-footer__btns'>
                    <div className="app__feed-footer__btn">
                        <FiHeart />
                    </div>
                    <div className="app__feed-footer__btn">
                        <BsChat />
                    </div>
                    <div className="app__feed-footer__btn">
                        <MdOutlineShare />
                    </div>
                </div>
                <div className="app__feed-footer__details">
                    { feed.likes.length > 0 && <div className="app__feed-footer__details-like">
                        <div className="app__feed-footer__details-avatars">
                            { feed.likes.slice(0,3).map((like,index)=> (
                                <img 
                                    alt="" 
                                    key={index}
                                    src={like.avatar} 
                                />
                            ))}
                        </div>
                        <p> 
                            Liked By 
                            <Link href={'/profile/mikealangelo'}> { feed.likes[0].username } </Link> 
                            { feed.likes.length > 1 && <span> and <b>{ feed.likes.length - 1} others</b> </span> }
                        </p>
                    </div> }
                    <div className="app__feed-footer__details-comments"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feed;