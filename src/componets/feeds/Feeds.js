import React from 'react';
import './feeds.css';
import CreateFeed from './CreateFeed';
import Feed from './Feed';

// mock data
import feeds from '../../data/feed';

function Feeds({ open_upload_menu}) {
  return (
    <div className="app__feeds">
        <CreateFeed 
          open_upload_menu={open_upload_menu}
        />

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