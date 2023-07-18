import cls from './Input.module.scss'

const Input = ({
    type = 'text',
    placeholder = '',
    className = '',
    ...other
}) => {
    return (
        <input 
            className={cls.input + ' ' + className}
            type={type}
            placeholder={placeholder}
            {...other}
        />
    );
}

export default Input;
