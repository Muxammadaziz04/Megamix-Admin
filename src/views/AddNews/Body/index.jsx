import FileUpload from '../../../components/Form/FileUpload';
import Input from '../../../components/Form/Input';
import TextArea from '../../../components/Form/TextArea';
import InputsWrapper from '../../../components/InputsWrapper';
import LanguagesTab from '../../../components/LanguagesTab';
import cls from './Body.module.scss'

const Body = () => {
    return (
        <div className={cls.body}>
            <LanguagesTab className={cls.body__lang} />
            <InputsWrapper className={cls.body__title} title='Тема'>
                <Input 
                    placeholder='Тема'
                />
            </InputsWrapper>
            <InputsWrapper className={cls.body__img} title='Фото'>
                <FileUpload
                    accept='image/png, image/jpg, image/jpeg'
                >
                    Загрузить фото 
                </FileUpload>
            </InputsWrapper>
            <InputsWrapper className={cls.body__desc} title='Описание'>
                <TextArea 
                    placeholder='Описание'
                />
            </InputsWrapper>
        </div>
    );
}

export default Body;
