import GreyButton from '../../../components/Buttons/GreyButton';
import FileUpload from '../../../components/Form/FileUpload';
import Input from '../../../components/Form/Input';
import InputsWrapper from '../../../components/InputsWrapper';
import cls from './Body.module.scss'

const Body = () => {
    return (
        <div className={cls.body}>
            <InputsWrapper className={cls.body__lang} title='Выберите язык описания'>
                <div className={cls.body__lang__child}>
                    <GreyButton>Русский</GreyButton>
                    <GreyButton>Uzbekcha</GreyButton>
                    <GreyButton>Turkic</GreyButton>
                    <GreyButton>English</GreyButton>
                    <GreyButton>Tajik</GreyButton>
                </div>
            </InputsWrapper>
            <InputsWrapper className={cls.body__name} title='Названия продукта'>
                <Input />
            </InputsWrapper>
            <InputsWrapper className={cls.body__media} title='Названия продукта'>
                <div className={cls.body__media__child}>
                    <FileUpload>
                        Загрузить фото
                    </FileUpload>
                    <FileUpload>
                        Загрузить видео инструкция
                    </FileUpload>
                </div>
            </InputsWrapper>
        </div>
    );
}

export default Body;