import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../../constants/routes.constants';
import { getProductCategories } from '../../services/product';
import cls from './Sidebar.module.scss'

const Sidebar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { data: categories } = useQuery(
        ['categories'],
        getProductCategories,
        {
            staleTime: Infinity,
            cacheTime: Infinity,
            placeholderData: []
        }
    )
    const sidebarEl = routes(categories?.map(ctg => ({id: ctg?.id, label: ctg?.name, link: `/products/${ctg?.id}`})))

    useEffect(() => {
        const routeEl = sidebarEl.find(route => route.link === '/' + location.pathname.split('/').map(route => route.toLocaleLowerCase()).filter(route => route).join('/'))
        if (routeEl) {
            routeEl?.children?.length > 0 && navigate(routeEl.children[0].link)
        }
    }, [location.pathname])

    return (
        <aside className={cls.sidebar}>
            {
                sidebarEl?.length > 0 && sidebarEl.map(route => (
                    <div key={route.id}>
                        <Link to={route?.children?.length > 0 ? route?.children?.[0]?.link : route.link}>
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
                        </Link>
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
                                                            `${location.pathname}${location.search}`.toLocaleLowerCase().includes(child.link) ? cls.active__link : ''
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
                ))
            }
        </aside>
    );
}

export default Sidebar;
