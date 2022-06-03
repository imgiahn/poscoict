import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Users } from './User';
import { useContext } from 'react';
import { UserContext } from './UserContext';

const AuthRouter = () => {
    const { users } = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        console.log(users);
        const id = localStorage.getItem('id');
        const findUser = Users.find((data) => data.id === Number(id));
        if (!findUser || !id) {
            const from =
                location.pathname === '/login' || location.pathname === '/join' //
                    ? location.pathname
                    : '/login';
            navigate(from);
        } else {
            const from = location.pathname || '/';
            navigate(from === '/login' || from === '/join' ? '/' : from);
        }
    }, []);
    return <></>;
};
export default AuthRouter;
