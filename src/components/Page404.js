import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Users } from './User';
import { useContext } from 'react';
import { UserContext } from './UserContext';

const Page404 = () => {
    const navigate = useNavigate();
    const { users } = useContext(UserContext);
    useEffect(() => {
        const id = localStorage.getItem('id');
        const findUser = Users.find((data) => data.id === Number(id));
        if (!findUser) {
            navigate('/login');
        } else {
            navigate('/');
        }
    }, []);
    return <></>;
};
export default Page404;
