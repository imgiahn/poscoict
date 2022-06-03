import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BootstrapLogin from './components/BootstrapLogin';
import Main from './components/Main';
import Page404 from './components/Page404';
import { UserContext } from './components/UserContext';
import Join from './Join/Join';
import { useState } from 'react';
import { Users } from './components/User';
import Layout from './Layout/Layout';
import Profile from './Profile/Profile';

import { Follow } from './data/Follow';
import { PostContext } from './components/PostContext';
import { FollowContext } from './components/FollowContext';
import { Post } from './data/Post';

function App() {
    const [users, setUsers] = useState(Users);
    const insertUsers = (user) => {
        const newUser = { ...user, userId: user.id, id: users.length };
        setUsers([...users, newUser]);
    };

    const updateUsers = (user) => {
        const id = Number(localStorage.getItem('id'));
        const { img, name } = user;
        const findUsersIndex = users.findIndex((user) => user.id === id);
        if (findUsersIndex === -1) {
            console.error('not found');
            return;
        }
        const newUsers = [...users];
        newUsers.splice(findUsersIndex, 1, { ...users[findUsersIndex], name, img });
        setUsers(newUsers);
    };

    const [posts, setPosts] = useState(Post);
    const insertPost = (post) => {
        const newPost = { ...post, userId: Number(localStorage.getItem('id')), id: posts.length };
        setPosts([...posts, newPost]);
    };

    const deletePost = (postId) => {
        const delPosts = posts.filter((post) => post.id !== postId);
        setPosts(delPosts);
    };

    const [follows, setFollows] = useState(Follow);
    const insertFollow = (followerId) => {
        const newFollow = { following: Number(localStorage.getItem('id')), follower: followerId };
        setFollows([...follows, newFollow]);
    };

    return (
        <UserContext.Provider value={{ users, insertUsers, updateUsers }}>
            <PostContext.Provider value={{ posts, insertPost, deletePost }}>
                <FollowContext.Provider value={{ follows, insertFollow }}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Layout></Layout>}>
                                <Route index element={<Main></Main>}></Route>
                                <Route path="shopping" element={<Main></Main>}></Route>
                                <Route path="profile" element={<Profile></Profile>}></Route>
                            </Route>
                            <Route path="/login" element={<BootstrapLogin></BootstrapLogin>}></Route>
                            <Route path="/*" element={<Page404></Page404>}></Route>
                            <Route path="/join" element={<Join></Join>}></Route>
                        </Routes>
                    </BrowserRouter>
                </FollowContext.Provider>
            </PostContext.Provider>
        </UserContext.Provider>
    );
}

export default App;
