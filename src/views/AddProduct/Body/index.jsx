import GreyButton from '../../../components/Buttons/GreyButton';
import Input from '../../../components/Form/Input';
import InputsWrapper from '../../../components/InputsWrapper';
import cls from './Body.module.scss'

const Body = () => {
    return (
        <div>
            <InputsWrapper title='Названия продукта'>
                <Input placeholder='Продукта' />
            </InputsWrapper>
            <br />
            <InputsWrapper title='Названия продукта'>
                <GreyButton>Uzbekcha</GreyButton>
            </InputsWrapper>
        </div>
    );
}

export default Body;
