import { WhiteButton } from '../../../../components/Buttons/WhiteButton';
import cls from './Navbar.module.scss'

const Navbar = () => {
    return (
        <div className={cls.navbar}>
            <div></div>
            <WhiteButton>+ Добавить слайдер</WhiteButton>
        </div>
    );
}

export default Navbar;
