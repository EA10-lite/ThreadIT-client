import React from 'react';
import './story.css';


import { MdAdd } from 'react-icons/md';
import { stories } from '../../data/story';

function Story() {
    return (
        <section className="app__stories">
            <div className="app__stories-container">
                <div className="app__stories-container__row">
                    <div className="app__stories-container__row-button cta">
                        <MdAdd />
                        <p> Create Story </p>
                    </div>
                    <div className="app__stories-container__row-content">
                        { stories.map(story => (
                            <div className="app__story-card" key={story.id}>
                                <div className="app__story-card__overlay" />
                                <div className="app__story-card__content">
                                    <div className="app__story-card__content-img">
                                        <img src={story.story[0]} alt="user story" />
                                    </div>
                                    <div className="app__story-card__content-info">
                                        <img 
                                            src={story.user.avatar} 
                                            alt={`${story.user.username}`}
                                        />
                                        <p> { story.user.username } </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Story;