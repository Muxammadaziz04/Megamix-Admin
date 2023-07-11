import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../../constants/routes.constants';
import cls from './Sidebar.module.scss'

const Sidebar = () => {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const routeEl = routes.find(route => route.link === '/' + location.pathname.split('/').map(route => route.toLocaleLowerCase()).filter(route => route).join('/'))
        if(routeEl) {
            routeEl?.children?.length > 0 && navigate(routeEl.children[0].link) 
        }
    }, [location.pathname])

    return (
        <aside className={cls.sidebar}>
            {
                routes?.length > 0 && routes.map(route => (
                    <Link key={route.id} to={route.link}>
                        <div>
                            <button
                                className={
                                    route.link === '/' ? (
                                        location.pathname === '/' ? cls.active__btn : ''
                                    ) : (
                                        location.pathname.toLocaleLowerCase().includes(route.link) ? cls.active__btn : ''
                                    )
                                }
                            >
                                {route.icon()}
                                {route.label}
                            </button>
                            {
                                route?.children?.length > 0 && (
                                    <ul className={location.pathname.toLocaleLowerCase().includes(route.link) ? cls.open__children : ''}>
                                        {
                                            route.children?.map(child => (
                                                <Link key={child.id} to={child.link}>
                                                    <li
                                                        className={
                                                            child.link === '/' ? (
                                                                location.pathname === '/' ? cls.active__link : ''
                                                            ) : (
                                                                location.pathname.toLocaleLowerCase().includes(child.link) ? cls.active__link : ''
                                                            )
                                                        }
                                                    >
                                                        {child.label}
                                                    </li>
                                                </Link>
                                            ))
                                        }
                                    </ul>
                                )
                            }
                        </div>
                    </Link>
                ))
            }
        </aside>
    );
}

export default Sidebar;
