import { createContext } from 'react';

export const FollowContext = createContext({
    posts: [],
    insertFollow: (followerId) => {},
});
