import React from 'react';
import { Link } from 'react-router-dom';
import './notifications.css';

import { MdCancel } from 'react-icons/md';

// mock data
import notifications from '../../data/notifications';

function Notifications({ close_notifications }) {
    return (
        <div className="app__notifications">
            <div className="app__notifications-container">
                <div className="app__notifications-header">
                    <h4> Notifications </h4>
                    <MdCancel onClick={close_notifications} />
                </div>
                <div className="app__notifications-body">
                    { notifications.map(notification => (
                        <div className="app__notification" key={notification.id}>
                            { notification.tag === "post" ? (
                                <Link href="/post">
                                    <img src={notification.user.avatar} alt="" />
                                    <div> 
                                        <p><b>{ notification.user.username }</b> recently liked your post </p>
                                        <span className="date"> { notification.date } </span>
                                    </div>
                                </Link>
                            ) : notification.tag === "friend request" ? (
                                <div className="app__notification-item">
                                    <img src={notification.user.avatar} alt="" />
                                    <div>
                                        <p> <b>{ notification.user.username }</b> sent you a friend request. </p>
                                        <div className="app__notification-btns">
                                            <button className="accept"> Accept </button>
                                            <button className="decline"> Decline </button>
                                        </div>
                                        <span className="date"> { notification.date } </span>
                                    </div>
                                </div>
                            ) : notification.tag === "invite" ? (
                                <div className="app__notification-item">
                                    <img src={notification.user.avatar} alt="" />
                                    <div>
                                        <p> <b>{ notification.user.username }</b> invited you to like a page. </p>
                                        <div className="app__notification-btns">
                                            <button className="accept"> Accept </button>
                                            <button className="decline"> Decline </button>
                                        </div>
                                        <span className="date"> { notification.date } </span>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Notifications;