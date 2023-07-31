import toast, { Toaster } from "react-hot-toast";
import { useQueryClient } from "react-query";
import { useNavigate, useParams } from 'react-router-dom';
import BlackButton from '../../../components/Buttons/BlackButton';
import { LeftArrowIcon } from '../../../components/icons';
import { createProduct, updateProduct } from '../../../services/product';
import cls from './Navbar.module.scss'

const Navbar = ({ useForm = {} }) => {
    const params = useParams()
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { handleSubmit } = useForm

    const handleClick = (data) => {
        data.categoryId = params.categoryId
        const fd = new FormData()

        for (const key in data) {
            if(['ru', 'en', 'uz', 'tr', 'tj'].includes(key)) {
                fd.append(key, JSON.stringify(data[key]))
            } else {
                fd.append(key, data[key] || null)
            }
        }

        toast.promise(new Promise((res, rej) => {
            try {
                updateProduct(params.productId, fd)
                    .then(() => {
                        queryClient.invalidateQueries(['products', params?.categoryId])
                        setTimeout(() => navigate(-1), 1000)
                        res('')
                    })
                    .catch((error) => rej(error?.response?.data?.message))
            } catch (error) {
                rej(error)
            }
        }), {
            loading: 'Идёт изменение продукта...',
            success: 'Продукт изменен',
            error: (data) => typeof data === 'string' ? data : 'Что-то пошло не так'
        })
    }

    return (
        <div className={cls.navbar}>
            <div>
                <button onClick={() => navigate(-1)}><LeftArrowIcon /> Продукты</button>
                <Toaster />
            </div>
            <BlackButton onClick={handleSubmit(handleClick)}>Изменить</BlackButton>
        </div>
    );
}

export default Navbar;
