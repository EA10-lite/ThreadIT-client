import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import '../styles/profile.css';

// assets
import { MdOutlineCameraAlt } from 'react-icons/md';

// components
import { CreateFeed, Feed } from '../components';

// mock data
import feeds from '../data/feed';
import profiles from '../data/profile';
import user from '../data/user';

function ProfileLayout() {
    const { pathname } = useLocation();
    const { id } = useParams()
    const [profile_data, set_profile_data] = useState(null);

    useEffect(()=> {
        const data = profiles.find(profile=> profile.id === parseInt(id));
        set_profile_data(data);
    }, [id]);

    return (
        <div className="app__profile">
            <div className="app__profile-container">
                <div className="app__profile-container__header">
                    <div className="app__profile-coverphoto">
                        <img src={profile_data?.coverphoto} alt=""  />
                        { profile_data?.id === user.id && <label className="file_input">
                            <input type="file" />
                            <MdOutlineCameraAlt />
                        </label>}
                    </div>
                    <div className="app__profile-info">
                        <div className="app__profile-info__header">    
                            <div className="app__profile-info__img-container">
                                <img src={profile_data?.avatar} alt="" />
                                { profile_data?.id === user.id && <label className="file_input">
                                    <input type="file" />
                                    <MdOutlineCameraAlt />
                                </label> }
                            </div>
                            <div className="app__profile-info__details">
                                <div>
                                    <h4> { profile_data?.name} </h4>
                                    <p> { profile_data?.username } </p>
                                </div>
                                { profile_data?.id === user.id && <div className="button">
                                    <span> Edit Profile </span>
                                </div> }
                                { profile_data?.id !== user.id && <div className="button">
                                    <span> Message </span>
                                </div> }
                            </div>
                        </div>

                        <p className="bio"> { profile_data?.bio } </p>
                    </div>
                </div>

                <div className="app__profile-navigations">
                    <Link 
                        to="/profile/1/posts" 
                        className={pathname.endsWith("posts") ? "active": undefined}
                    > Posts </Link>
                    <Link 
                        to="friends" 
                        className={pathname.endsWith("friends") ? "active": undefined}
                    > Friends </Link>
                    <Link 
                        to="about" 
                        className={pathname.endsWith("about") ? "active": undefined}
                    > About </Link>
                </div>

                { profile_data?.id === user.id && <div className="app__profile-create">
                    <CreateFeed />
                </div> }
                <div className="app__profile-container__content">
                    <Outlet />
                </div>

                { feeds.map(feed=> (
                    <Feed 
                        key={feed.id} 
                        user={feed.user}
                        feed={feed.feed}
                    />
                ))}
            </div>
        </div>
    )
}

export default  ProfileLayout;