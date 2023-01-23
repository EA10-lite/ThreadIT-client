import image1 from '../assets/feed-1.jpg';
import image2 from '../assets/feed-2.jpg';
import image3 from '../assets/feed-3.jpg';
import image4 from '../assets/feed-4.jpg';
import image5 from '../assets/feed-5.jpg';

import avatar1 from '../assets/profile-1.jpg';
import avatar2 from '../assets/profile-2.jpg';
import avatar3 from '../assets/profile-3.jpg';
import avatar4 from '../assets/profile-4.jpg';
import avatar5 from '../assets/profile-5.jpg';

import avatar6 from '../assets/profile-6.jpg';
import avatar7 from '../assets/profile-7.jpg';
import avatar8 from '../assets/profile-8.jpg';
import avatar9 from '../assets/profile-9.jpg';

const feeds = [
    {
        id: 1,
        user: {
            avatar: avatar1,
            username: 'chris'
        },
        feed: {
            urls: image1,
            comments: [],
            likes: [
                { id: 1, avatar: avatar6, username: 'Mikealangelo' },
                { id: 2, avatar: avatar7, username: 'Zinchenko' },
            ],
            location: 'San Francisco'
        }
    },
    {
        id: 2,
        user: {
            avatar: avatar2,
            username: 'Mykhalo'
        },
        feed: {
            urls: image2,
            comments: [],
            likes: [
                { id: 1, avatar: avatar8, username: 'Felix' },
                { id: 2, avatar: avatar9, username: 'Guameres' },
            ],
            location: 'Los Angeles'
        }
    },
    {
        id: 3,
        user: {
            avatar: avatar3,
            username: 'Dumbledore'
        },
        feed: {
            urls: image3,
            comments: [],
            likes: [
                { id: 2, avatar: avatar9, username: 'Guameres' },
                { id: 3, avatar: avatar2, username: 'Karim' },
                { id: 4, avatar: avatar3, username: 'Alcantara' },
            ],
            location: 'Panama'
        }
    },
    {
        id: 4,
        user: {
            avatar: avatar4,
            username: 'Manuel'
        },
        feed: {
            urls: image4,
            comments: [],
            likes: [],
            location: 'Montpellier Paris'
        }
    },
    {
        id: 5,
        user: {
            avatar: avatar5,
            username: 'Zaniolo'
        },
        feed: {
            urls: image5,
            comments: [],
            likes: [],
            location: 'Razario'
        }
    },

];

export default feeds;