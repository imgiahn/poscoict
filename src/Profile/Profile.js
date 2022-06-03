import { useContext } from 'react';
import { Container } from 'reactstrap';
import { UserContext } from '../components/UserContext';
import ProfileBody from './ProfileBody';
import ProfileHeader from './ProfileHeader';
import './Profile.css';
import { PostContext } from '../components/PostContext';
import { FollowContext } from '../components/FollowContext';
import ProfileBoard from './ProfileBoard';

const Profile = () => {
    const { users } = useContext(UserContext);
    const id = Number(localStorage.getItem('id'));
    const getUser = () => {
        return users.find((user) => id === user.id);
    };
    const { name, img } = getUser();
    const { posts, deletePost } = useContext(PostContext);
    const { follows } = useContext(FollowContext);

    const MyPosts = () => {
        return posts.filter((post) => post.userId === id);
    };

    const MyFollower = () => {
        return follows.filter((follow) => follow.following === id);
    };
    const MyFollowing = () => {
        return follows.filter((follow) => follow.follower === id);
    };

    return (
        <>
            <ProfileHeader name={name}></ProfileHeader>
            <Container className="ProfileContainer">
                <ProfileBody img={img} follower={MyFollower()} following={MyFollowing()} posts={MyPosts()} name={name}></ProfileBody>
                <ProfileBoard posts={MyPosts()} name={name} img={img} deletePost={deletePost}></ProfileBoard>
            </Container>
        </>
    );
};

export default Profile;
