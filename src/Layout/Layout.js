import { Outlet } from 'react-router-dom';
import AuthRouter from '../components/AuthRouter';
import Menubar from './Menubar';

const Layout = () => {
    return (
        <>
            <AuthRouter></AuthRouter>
            <Outlet />
            <Menubar></Menubar>
        </>
    );
};

export default Layout;
