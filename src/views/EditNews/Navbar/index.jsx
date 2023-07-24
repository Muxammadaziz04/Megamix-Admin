import { useNavigate, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'
import BlackButton from '../../../components/Buttons/BlackButton';
import { LeftArrowIcon } from '../../../components/icons';
import { editNews } from '../../../services/news';
import { useQueryClient } from 'react-query';
import cls from './Navbar.module.scss'

const Navbar = ({ useForm = {} }) => {
    const navigate = useNavigate()
    const params = useParams()
    const queryClient = useQueryClient()
    const { handleSubmit } = useForm

    const handleClick = (data) => {
        const fd = new FormData()

        for (const key in data) {
            if (['ru', 'en', 'uz', 'tr', 'tj'].includes(key)) {
                fd.append(key, JSON.stringify(data[key]))
            } else {
                fd.append(key, data[key])
            }
        }

        toast.promise(new Promise((res, rej) => {
            try {
                editNews(params?.newsId, fd)
                    .then(() => {
                        queryClient.invalidateQueries(['news'])
                        setTimeout(() => navigate(-1), 1000)
                        res('')
                    })
                    .catch((error) => rej(error?.response?.data?.message))
            } catch (error) {
                rej(error)
            }
        }), {
            loading: 'Идёт изменение новости...',
            success: 'Новость изменен',
            error: (data) => typeof data === 'string' ? data : 'Что-то пошло не так'
        })
    }

    return (
        <div className={cls.navbar}>
            <div>
                <Toaster />
                <button onClick={() => navigate('/press-reliz/news')}><LeftArrowIcon /> Новости</button>
            </div>
            <BlackButton onClick={handleSubmit(handleClick)}>Изменить</BlackButton>
        </div>
    );
}

export default Navbar;
