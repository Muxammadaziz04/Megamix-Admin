import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../../components/icons';
import Loader from '../../components/Loader';
import { login } from '../../services/login';
import { authActions } from '../../store/auth/auth.slice';
import cls from './Login.module.scss'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()

    const sendForm = async (data) => {
        try {
            setIsLoading(true)
            const res = await login(data)
            if(res.success) {
                dispatch(authActions.login())
                navigate('/')
            } else {
                alert('Неверный логин или пароль')
            }
        } catch (error) {
            
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className={cls.body}>
            <form className={cls.body__form} onSubmit={handleSubmit(sendForm)}>
                <Logo />
                {
                    !isLoading ? (
                        <>
                            <label className={cls.body__form__input}>
                                Логин
                                <input type="text" {...register('login', { required: { value: true, message: 'Заполните это поле' } })} />
                                <span>{errors?.login?.message}</span>
                            </label>
                            <label className={cls.body__form__input}>
                                Пароль
                                <input type="password" {...register('password', { required: { value: true, message: 'Заполните это поле' } })} />
                                <span>{errors?.password?.message}</span>
                            </label>
                            <button className={cls.body__form__btn} type='submit'>Войти</button>
                        </>
                    ) : (
                        <Loader />
                    )
                }
            </form>
        </div>
    );
}

export default Login;
