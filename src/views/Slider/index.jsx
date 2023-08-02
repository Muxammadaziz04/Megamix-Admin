import toast, { Toaster } from 'react-hot-toast'
import { useQuery, useQueryClient } from 'react-query';
import { CloseIcon } from '../../components/icons';
import InputsWrapper from "../../components/InputsWrapper";
import { uploadFile } from '../../services/gallery';
import { createSlider, deleteSlider, getSlider } from '../../services/slider';
import cls from './slider.module.scss'

const Slider = () => {
    const queryClient = useQueryClient()
    const {data} = useQuery(['slider'], getSlider)

    const handleChange = (e) => {
        const fd = new FormData()

        fd.append('file', e.target.files?.[0])

        toast.promise(new Promise((res, rej) => {
            try {
                uploadFile(fd)
                    .then(async(file) => {
                        if(file?.url) {
                            await createSlider(file?.url)
                            queryClient.invalidateQueries(['slider'])
                            res('')
                        } else {
                            rej('')
                        }
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

    const deleteImage = async (id) => {
        toast.promise(new Promise((res, rej) => {
            try {
                deleteSlider(id)
                    .then(() => {
                        queryClient.invalidateQueries(['slider'])
                        res('')
                    })
                    .catch((error) => rej(error?.response?.data?.message))
            } catch (error) {
                rej(error)
            }
        }), {
            loading: 'Удаляем изображение',
            success: 'Изображение удалено',
            error: (data) => typeof data === 'string' ? data : 'Что-то пошло не так'
        })
    }

    return (
        <div>
            <Toaster />
            <InputsWrapper title="Баннер">
                <div className={cls.body}>
                    {
                        data?.length > 0 && data?.map((image) => (
                            <div key={image?.id}>
                                <img src={image?.image} />
                                <button onClick={() => deleteImage(image?.id)}><CloseIcon /></button>
                            </div>
                        ))
                    }
                    <label className={cls.input}>
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

export default Slider;
