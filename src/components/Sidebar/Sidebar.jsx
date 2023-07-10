import { Link, useLocation } from 'react-router-dom';
import routes from './routes';
import cls from './Sidebar.module.scss'

const Sidebar = () => {
    const location = useLocation()

    return (
        <aside className={cls.sidebar}>
            {
                routes?.length > 0 && routes.map(route => (
                    <Link key={route.id} to={route.link}>
                        <button
                            className={
                                route.link === '/' ? (
                                    location.pathname === '/' ? cls.active__btn : ''
                                ) : (
                                    location.pathname.includes(route.link) ? cls.active__btn : ''
                                )
                            }
                        >
                            {route.icon()}
                            {route.label}
                        </button>
                    </Link>
                ))
            }
        </aside>
    );
}

export default Sidebar;
