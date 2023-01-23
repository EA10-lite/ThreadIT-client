import React from 'react';
import './feeds.css';
import CreateFeed from './CreateFeed';
import Feed from './Feed';

// mock data
import feeds from '../../data/feed';

function Feeds() {
  return (
    <div className="app__feeds">
        <CreateFeed />

        { feeds.map(feed=> (
            <Feed 
                key={feed.id} 
                user={feed.user}
                feed={feed.feed}
            />
        ))}
    </div>
  )
}

export default Feeds;