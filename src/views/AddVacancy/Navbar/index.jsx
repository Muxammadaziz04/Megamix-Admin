import toast, { Toaster } from "react-hot-toast";
import { useQueryClient } from "react-query";
import { useNavigate, useParams } from 'react-router-dom';
import BlackButton from '../../../components/Buttons/BlackButton';
import { LeftArrowIcon } from '../../../components/icons';
import { createVacancy } from "../../../services/vacancy";
import cls from './Navbar.module.scss'

const Navbar = ({ useForm = {} }) => {
    const params = useParams()
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { handleSubmit } = useForm

    const handleClick = (data) => {
        toast.promise(new Promise((res, rej) => {
            try {
                createVacancy(data)
                    .then(() => {
                        queryClient.invalidateQueries(['vacancies'])
                        setTimeout(() => navigate(-1), 1000)
                        res('')
                    })
                    .catch((error) => rej(error?.response?.data?.message))
            } catch (error) {
                rej(error)
            }
        }), {
            loading: 'Идёт создание вакансии...',
            success: 'Вакансия создана',
            error: (data) => typeof data === 'string' ? data : 'Что-то пошло не так'
        })
    }

    return (
        <div className={cls.navbar}>
            <div>
                <button onClick={() => navigate(-1)}><LeftArrowIcon /> Вакансии</button>
                <Toaster />
            </div>
            <BlackButton onClick={handleSubmit(handleClick)}>Опубликовать</BlackButton>
        </div>
    );
}

export default Navbar;
