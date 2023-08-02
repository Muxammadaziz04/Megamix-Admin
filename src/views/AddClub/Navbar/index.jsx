import toast, { Toaster } from 'react-hot-toast'
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import BlackButton from '../../../components/Buttons/BlackButton';
import { LeftArrowIcon } from '../../../components/icons';
import { createClub } from '../../../services/club';
import cls from './Navbar.module.scss'

const Navbar = ({ useForm = {} }) => {
    const navigate = useNavigate()
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
                createClub(fd)
                    .then(() => {
                        queryClient.invalidateQueries(['club'])
                        setTimeout(() => navigate(-1), 1000)
                        res('')
                    })
                    .catch((error) => rej(error?.response?.data?.message))
            } catch (error) {
                rej(error)
            }
        }), {
            loading: 'Идёт создание приза...',
            success: 'Приз создан',
            error: 'Что-то пошло не так'
        })
    }

    return (
        <div className={cls.navbar}>
            <div>
                <Toaster />
                <button onClick={() => navigate('/club')}><LeftArrowIcon /> Призы</button>
            </div>
            <BlackButton onClick={handleSubmit(handleClick)}>Опубликовать</BlackButton>
        </div>
    );
}

export default Navbar;
