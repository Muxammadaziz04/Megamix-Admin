import { useEffect } from 'react';
import GreyButton from '../../../components/Buttons/GreyButton';
import FileUpload from '../../../components/Form/FileUpload';
import Input from '../../../components/Form/Input';
import TextArea from '../../../components/Form/TextArea';
import InputsWrapper from '../../../components/InputsWrapper';
import LanguagesTab from '../../../components/LanguagesTab';
import useSearchParams from '../../../hooks/useSearchParams';
import cls from './Body.module.scss'

const Body = ({useForm = {}}) => {
    const {register, watch, setValue} = useForm
    const [params, setSearchParams] = useSearchParams()
    const watchedFiles = watch()

    useEffect(() => {
        if (!params.get('area')) {
            setSearchParams({ area: 'description' })
        }
    }, [params.get('area')])

    return (
        <div className={cls.body}>
            <LanguagesTab className={cls.body__lang} />
            <InputsWrapper className={cls.body__name} title='Название продукта'>
                <Input
                    placeholder='Название продукта'
                    register={{ ...register('name', { required: true }) }}
                />
            </InputsWrapper>
            <InputsWrapper className={cls.body__media} title='Фото и видео'>
                <div className={cls.body__media__child}>
                    <FileUpload 
                        accept='image/png, image/jpg, image/jpeg'
                        onChange={(file) => setValue('foto', file)}
                    >
                        Загрузить фото
                    </FileUpload>
                    <FileUpload 
                        accept='video/mp4'
                        onChange={(file) => setValue('video', file)}
                    >
                        Загрузить видео инструкция
                    </FileUpload>
                </div>
            </InputsWrapper>
            <div className={cls.body__desc}>
                <div>
                    <button 
                        className={params.get('area') === 'description' ? cls.active__tab : ''} 
                        onClick={() => setSearchParams({ area: 'description' })}
                    >
                        Описание
                    </button>
                    <button 
                        className={params.get('area') === 'technicalSpecifications' ? cls.active__tab : ''} 
                        onClick={() => setSearchParams({ area: 'technicalSpecifications' })}
                    >
                        Технические характеристики
                    </button>
                    <button 
                        className={params.get('area') === 'packaging' ? cls.active__tab : ''} 
                        onClick={() => setSearchParams({ area: 'packaging' })}
                    >
                        Упаковка
                    </button>
                </div>
                <div>
                    <TextArea 
                        placeholder='Описание'
                        value={watchedFiles?.[params.get('lang')]?.[params.get('area')] || ''}
                        register={{...register(`${params.get('lang')}.${params.get('area')}`)}}
                    />
                </div>
            </div>
            <InputsWrapper className={cls.body__calc} title='Калькулятор'>
                <div className={cls.body__calc__child}>
                    <Input 
                        type='number'
                        label='Толщина слоя' 
                        placeholder='см' 
                    />
                    <Input 
                        type='number'
                        label='Объём' 
                        placeholder='м²' 
                    />
                    <Input 
                        type='number'
                        label='Килограмм' 
                        placeholder='кг' 
                    />
                    <Input 
                        type='number'
                        label='Литр' 
                        placeholder='л' 
                    />
                </div>
            </InputsWrapper>
        </div>
    );
}

export default Body;