import cls from './Input.module.scss'

const Input = ({
    type = 'text',
    placeholder = '',
    className = '',
    label = '',
    register = {},
    error = '',
    ...other
}) => {
    return (
        <label className={cls.label}>
            {label}
            <input
                className={cls.input + ' ' + className}
                type={type}
                placeholder={placeholder}
                {...register}
                {...other}
            />
            {error && <span>{error}</span>}
        </label>
    );
}

export default Input;
