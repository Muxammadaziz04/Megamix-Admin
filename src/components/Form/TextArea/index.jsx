import cls from './TextArea.module.scss'

const TextArea = ({
    className = '',
    register = {},
    error = '',
    ...other
}) => {
    return (
        <label className={cls.label}>
            <textarea 
                className={cls.textarea + '' + className}
                {...register}
                {...other}
            >
            </textarea>
            {error && <span>{error}</span>}
        </label>
    );
}

export default TextArea;
