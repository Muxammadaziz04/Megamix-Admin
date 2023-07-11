import { WhiteButton } from '../../../../components/Buttons/WhiteButton';
import cls from './Navbar.module.scss'

const Navbar = () => {
    return (
        <div className={cls.navbar}>
            <div></div>
            <WhiteButton>+ Добавить продукт</WhiteButton>
        </div>
    );
}

export default Navbar;
