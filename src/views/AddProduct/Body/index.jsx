import { useEffect } from 'react';
import GreyButton from '../../../components/Buttons/GreyButton';
import FileUpload from '../../../components/Form/FileUpload';
import Input from '../../../components/Form/Input';
import TextArea from '../../../components/Form/TextArea';
import InputsWrapper from '../../../components/InputsWrapper';
import LanguagesTab from '../../../components/LanguagesTab';
import useSearchParams from '../../../hooks/useSearchParams';
import cls from './Body.module.scss'

const Body = ({ useForm = {} }) => {
    const { register, clearErrors, watch, setValue, formState: { errors } } = useForm
    const [params, setSearchParams] = useSearchParams()
    const watchedFiles = watch()

    useEffect(() => {
        if (!params.get('area')) {
            setSearchParams({ area: 'description' })
        }

        if (!params.get('lang')) {
            setSearchParams({ lang: 'ru' })
        }
    }, [params.get('area'), params.get('lang')])

    return (
        <div className={cls.body}>
            <LanguagesTab className={cls.body__lang} />
            <InputsWrapper className={cls.body__name} title='Название продукта'>
                <Input
                    placeholder='Название продукта'
                    register={{ ...register('title', { required: { value: true, message: 'Название продукта обязательно к заполнению' } }) }}
                    error={errors?.title?.message || null}
                />
            </InputsWrapper>
            <InputsWrapper className={cls.body__media} title='Фото и видео'>
                <div className={cls.body__media__child}>
                    <FileUpload
                        accept='image/png, image/jpg, image/jpeg'
                        onChange={(file) => { clearErrors('foto'); setValue('foto', file) }}
                        error={errors?.foto?.message}
                        value={watchedFiles?.foto}
                    >
                        Загрузить фото
                    </FileUpload>
                    <FileUpload
                        accept='video/mp4'
                        onChange={(file) => { clearErrors('video'); setValue('video', file) }}
                        error={errors?.video?.message}
                        value={watchedFiles?.video}
                        type='video'
                    >
                        Загрузить видео инструкцию
                    </FileUpload>
                </div>
            </InputsWrapper>
            <div className={cls.body__shortdesc}>
                <InputsWrapper title='Короткое описание'>
                    <Input
                        value={watchedFiles?.[params.get('lang')]?.shortDescription || ''}
                        placeholder='Короткое описание продукта'
                        register={{
                            ...register(`${params.get('lang')}.shortDescription`, {
                                required: { value: true, message: 'Краткое описание продукта обязательно к заполнению' }
                            })
                        }}
                        error={errors?.ru?.shortDescription?.message}
                    />
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
                        {params.get('area') === 'description' && (
                            <TextArea
                                placeholder='Назначение'
                                value={watchedFiles?.[params.get('lang')]?.[params.get('area')] || ''}
                                register={{
                                    ...register(`${params.get('lang')}.description`, {
                                        required: { value: true, message: 'Описание продукта обязательно к заполнению' }
                                    })
                                }}
                                error={errors?.ru?.description?.message}
                            />
                        )}
                        {params.get('area') === 'technicalSpecifications' && (
                            <div className={cls.body__tech}>
                                <Input
                                    label='Вес НЕТТО:'
                                    placeholder='КГ'
                                    register={{ ...register(`weight`) }}
                                />
                                {/* <Input
                                    label='Прочность на сжатие:'
                                    placeholder='МПа'
                                    register={{ ...register(`compressiveStrength`) }}
                                />
                                <Input
                                    label='Перемешивание с водой:'
                                    placeholder='Литр'
                                    register={{ ...register(`mixinWithWater`) }}
                                />
                                <Input
                                    label='Температура рабочей среды:'
                                    placeholder='+5°С/+35°С.'
                                    register={{ ...register(`workingMediumTemperature`) }}
                                /> */}
                                <TextArea
                                    value={watchedFiles?.[params.get('lang')]?.technicalSpecifications || ''}
                                    label='Показания:'
                                    placeholder='Технические характеристики'
                                    register={{ ...register(`${params.get('lang')}.technicalSpecifications`) }}
                                />
                            </div>
                        )}
                        {params.get('area') === 'packaging' && (
                            <Input
                                value={watchedFiles?.[params.get('lang')]?.packaging || ''}
                                label='Упаковка'
                                placeholder='Упаковка'
                                register={{ ...register(`${params.get('lang')}.packaging`) }}
                            />
                        )}
                    </div>
                </div>
            </div>
            <InputsWrapper className={cls.body__calc} title='Калькулятор'>
                <div className={cls.body__calc__child}>
                    <Input
                        type='number'
                        label='Толщина слоя'
                        placeholder='см'
                        register={{ ...register(`calcLayerWidth`) }}
                    />
                    <Input
                        type='number'
                        label='Объём'
                        placeholder='м²'
                        register={{ ...register(`calcVolume`) }}
                    />
                    <Input
                        type='number'
                        label='Килограмм'
                        placeholder='кг'
                        register={{ ...register(`calcWeight`) }}
                    />
                    <Input
                        type='number'
                        label='Литр'
                        placeholder='Лирт'
                        register={{ ...register(`calcWaterQuantity`) }}
                    />
                </div>
            </InputsWrapper>
        </div>
    );
}

export default Body;