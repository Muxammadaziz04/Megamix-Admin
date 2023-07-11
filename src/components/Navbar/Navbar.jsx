import { useLocation, useSearchParams } from 'react-router-dom';
import { routesName } from '../../constants/routes.constants';
import paramsToObject from '../../utils/paramsToObject';
import { Container } from '../Container';
import { SearchInput } from '../Form/SearchInput';
import { Logo } from '../icons';
import cls from './Navbar.module.scss'

const Navbar = () => {
    const location = useLocation()
    const [params, setSearchParams] = useSearchParams()
    const route = location.pathname.split('/').map(route => route.toLocaleLowerCase()).filter(route => route).join('/') 

    return (
        <nav className={cls.nav}>
            <Container className={cls.nav__container}>
                <Logo />
                <div className={cls.nav__group}>
                    <span></span>
                    <span>{routesName?.[route]}</span>
                    <SearchInput
                        placeholder='Что-то...'
                        onChange={(e) => setSearchParams({ ...paramsToObject(params.entries()), search: e.target.value }, { replace: true })}
                        value={params.get('search')}
                    />
                </div>
            </Container>
        </nav>
    );
}

export default Navbar;
