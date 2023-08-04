import FileUpload from '../../../components/Form/FileUpload';
import Input from '../../../components/Form/Input';
import TextArea from '../../../components/Form/TextArea';
import InputsWrapper from '../../../components/InputsWrapper';
import LanguagesTab from '../../../components/LanguagesTab';
import useSearchParams from '../../../hooks/useSearchParams';
import cls from './Body.module.scss'

const Body = ({ useForm = {} }) => {
    const [params] = useSearchParams()
    const { register, watch, setValue, formState: { errors } } = useForm
    const watchedFiles = watch()

    return (
        <div className={cls.body}>
            <LanguagesTab className={cls.body__lang} />
            <InputsWrapper className={cls.body__title} title='Тема'>
                <Input
                    placeholder='Тема'
                    value={watchedFiles?.[params.get('lang')]?.title || ''}
                    register={{ ...register(`${params.get('lang')}.title`, { required: { value: true, message: 'Заполните это поле' } }) }}
                    error={errors?.[params.get('lang')]?.title?.message}
                />
            </InputsWrapper>
            <InputsWrapper className={cls.body__img} title='Фото'>
                <FileUpload
                    accept='image/png, image/jpg, image/jpeg'
                    onChange={(file) => setValue('image', file)}
                    value={watchedFiles?.image}
                >
                    Загрузить фото
                </FileUpload>
            </InputsWrapper>
            <InputsWrapper className={cls.body__desc} title='Краткое описание'>
                <Input
                    placeholder='Краткое описание'
                    value={watchedFiles?.[params.get('lang')]?.shortDescription || ''}
                    register={{ ...register(`${params.get('lang')}.shortDescription`, { required: { value: true, message: 'Заполните описание' } }) }}
                    error={errors?.[params.get('lang')]?.shortDescription?.message}
                />
            </InputsWrapper>
            <InputsWrapper className={cls.body__desc} title='Описание'>
                <TextArea
                    placeholder='Описание'
                    value={watchedFiles?.[params.get('lang')]?.description || ''}
                    register={{ ...register(`${params.get('lang')}.description`, { required: { value: true, message: 'Заполните описание' } }) }}
                    error={errors?.[params.get('lang')]?.description?.message}
                />
            </InputsWrapper>
        </div>
    );
}

export default Body;
