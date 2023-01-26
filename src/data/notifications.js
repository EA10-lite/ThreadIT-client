import profile1 from '../assets/profile-1.jpg'
import profile2 from '../assets/profile-2.jpg'
import profile3 from '../assets/profile-3.jpg'
import profile4 from '../assets/profile-4.jpg'

const notifications = [
    {
        id: 1,
        tag: 'post',
        date: '1hr ago',
        body: ' and 3 others recently likes your post',
        user: {
            avatar: profile1,
            username: 'Hakimi'
        }
    },
    {
        id: 2,
        tag: 'friend request',
        date: 'yesterday',
        body: 'sent you a friend request.',
        user: {
            avatar: profile2,
            username: 'Jimmy Neutron'
        }
    },
    {
        id: 3,
        tag: 'post',
        date: '2days ago',
        body: 'commented on your post.',
        user: {
            avatar: profile4,
            username: 'Mikealson'
        }
    },
    {
        id: 4,
        tag: 'invite',
        date: 'yesterday',
        body: 'invites you to like a page',
        user: {
            avatar: profile3,
            username: 'Salvatore'
        }
    },
];

export default notifications;