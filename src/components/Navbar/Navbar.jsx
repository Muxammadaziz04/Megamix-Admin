import { useSearchParams } from 'react-router-dom';
import paramsToObject from '../../utils/paramsToObject';
import { Container } from '../Container';
import { SearchInput } from '../Form/SearchInput';
import { Logo } from '../icons';
import cls from './Navbar.module.scss'

const Navbar = () => {
    const [params, setSearchParams] = useSearchParams()

    return (
        <nav className={cls.nav}>
            <Container className={cls.nav__container}>
                <Logo />
                <div className={cls.nav__group}>
                    <span></span>
                    <span>Добавление слайдер</span>
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
