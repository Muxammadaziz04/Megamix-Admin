import { useNavigate } from 'react-router-dom';
import { WhiteButton } from '../../../../components/Buttons/WhiteButton';
import cls from './Navbar.module.scss'

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <div className={cls.navbar}>
            <div></div>
            <WhiteButton onClick={() => navigate('/products/add')}>+ Добавить продукт</WhiteButton>
        </div>
    );
}

export default Navbar;
