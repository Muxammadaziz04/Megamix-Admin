import toast, { Toaster } from "react-hot-toast";
import Input from "../../../components/Form/Input";
import { CloseIcon } from "../../../components/icons";
import InputsWrapper from "../../../components/InputsWrapper";
import LanguagesTab from "../../../components/LanguagesTab";
import useSearchParams from "../../../hooks/useSearchParams";
import { uploadFile } from "../../../services/gallery";
import cls from './Body.module.scss'

const Body = ({ useForm = {} }) => {
    const [params] = useSearchParams()
    const { register, setValue, watch, formState: { errors } } = useForm
    const watchedFiles = watch()

    const handleChange = (e) => {
        const fd = new FormData()

        fd.append('file', e.target.files?.[0])

        toast.promise(new Promise((res, rej) => {
            try {
                uploadFile(fd)
                    .then((file) => {
                        setValue('images', [file?.url, ...(watchedFiles?.images || [])]);
                        res('')
                    })
                    .catch((error) => rej(error?.response?.data?.message))
            } catch (error) {
                rej(error)
            }
        }), {
            loading: 'Загружаем изображение',
            success: 'Изображение загружено',
            error: (data) => typeof data === 'string' ? data : 'Что-то пошло не так'
        })
    }

    const deleteImage = (i) => {
        setValue('images', watchedFiles?.images?.filter((__dirname, index) => index !== i))
    }

    return (
        <div className={cls.body}>
            <LanguagesTab />
            <Toaster />
            <InputsWrapper title='Описание'>
                <Input
                    placeholder="Описание"
                    value={watchedFiles?.[params.get('lang')] || ''}
                    register={{ ...register((params.get('lang') || 'null'), { required: { value: true, message: 'Добавьте описание для галереи' } }) }}
                    error={errors?.[params.get('lang')]?.message}
                />
            </InputsWrapper>
            <InputsWrapper title="Фото">
                <div className={cls.body__fotoWrapper}>
                    {
                        watchedFiles?.images?.length > 0 && watchedFiles?.images?.map((image, index) => (
                            <div>
                                <img src={image} key={index} />
                                <button onClick={() => deleteImage(index)}><CloseIcon /></button>
                            </div>
                        ))
                    }
                    <label className={cls.body__fotoWrapper__input}>
                        Добавить фото
                        <input
                            accept='image/png, image/jpg, image/jpeg'
                            type="file"
                            onChange={handleChange}
                        />
                    </label>
                </div>
            </InputsWrapper>
        </div>
    );
}

export default Body;
