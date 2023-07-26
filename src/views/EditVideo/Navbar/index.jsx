import toast, { Toaster } from "react-hot-toast";
import { useQueryClient } from "react-query";
import { useNavigate, useParams } from 'react-router-dom';
import BlackButton from '../../../components/Buttons/BlackButton';
import { LeftArrowIcon } from '../../../components/icons';
import { updateVideGallery } from "../../../services/gallery";
import cls from './Navbar.module.scss'

const Navbar = ({ useForm = {} }) => {
    const params = useParams()
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { handleSubmit } = useForm

    const handleClick = (data) => {
        toast.promise(new Promise((res, rej) => {
            try {
                updateVideGallery(params?.id, data)
                    .then(() => {
                        queryClient.invalidateQueries(['videos'])
                        setTimeout(() => navigate(-1), 1000)
                        res('')
                    })
                    .catch((error) => rej(error?.response?.data?.message))
            } catch (error) {
                rej(error)
            }
        }), {
            loading: 'Идёт изменение галереи...',
            success: 'Галерея изменена',
            error: (data) => typeof data === 'string' ? data : 'Что-то пошло не так'
        })
    }

    return (
        <div className={cls.navbar}>
            <div>
                <button onClick={() => navigate(-1)}><LeftArrowIcon />Видео галерея</button>
                <Toaster />
            </div>
            <BlackButton onClick={handleSubmit(handleClick)}>Изменить</BlackButton>
        </div>
    );
}

export default Navbar;
