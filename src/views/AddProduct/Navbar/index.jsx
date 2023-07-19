import { useNavigate } from 'react-router-dom';
import BlackButton from '../../../components/Buttons/BlackButton';
import { LeftArrowIcon } from '../../../components/icons';
import cls from './Navbar.module.scss'

const Navbar = ({ useForm = {} }) => {
    const navigate = useNavigate()
    const { handleSubmit } = useForm

    const handleClick = (data) => {
        alert(JSON.stringify(data))
    }

    return (
        <div className={cls.navbar}>
            <div>
                <button onClick={() => navigate('/products')}><LeftArrowIcon /> Продукты</button>
            </div>
            <BlackButton onClick={handleSubmit(handleClick)}>Опубликовать</BlackButton>
        </div>
    );
}

export default Navbar;
