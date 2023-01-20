
import story1 from '../assets/story-1.jpg';
import story2 from '../assets/story-2.jpg';
import story3 from '../assets/story-3.jpg';
import story4 from '../assets/story-4.jpg';
import story5 from '../assets/story-5.jpg';
import story6 from '../assets/story-6.jpg';

import profile1 from '../assets/profile-1.jpg'
import profile2 from '../assets/profile-2.jpg'
import profile3 from '../assets/profile-3.jpg'
import profile4 from '../assets/profile-4.jpg'
import profile5 from '../assets/profile-5.jpg'

export const stories = [
    {
        id: 1, 
        user: {
            username: 'Milly',
            avatar: profile1
        },
        story: [ story1, story2 ]
    },
    {
        id: 2, 
        user: {
            username: 'Chris',
            avatar: profile5
        },
        story: [ story2 ]
    },
    {
        id: 3, 
        user: {
            username: 'EA10',
            avatar: profile3
        },
        story: [ story3, story4 ]
    },
    {
        id: 4, 
        user: {
            username: 'Neymar Jr',
            avatar: profile4
        },
        story: [ story2 ]
    },
    {
        id: 5, 
        user: {
            username: 'Dumbledore',
            avatar: profile5
        },
        story: [ story5, story6 ]
    },
    {
        id: 6, 
        user: {
            username: 'Turner',
            avatar: profile2
        },
        story: [ story4, story1 ]
    },
    {
        id: 7, 
        user: {
            username: 'Ross',
            avatar: profile1
        },
        story: [ story2 ]
    },
]