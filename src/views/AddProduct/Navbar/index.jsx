import { useNavigate } from 'react-router-dom';
import BlackButton from '../../../components/Buttons/BlackButton';
import { LeftArrowIcon } from '../../../components/icons';
import cls from './Navbar.module.scss'

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <div className={cls.navbar}>
            <div>
                <button onClick={() => navigate('/products')}><LeftArrowIcon /> Продукты</button>
            </div>
            <BlackButton>Опубликовать</BlackButton>
        </div>
    );
}

export default Navbar;
