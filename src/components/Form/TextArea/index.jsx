import cls from './TextArea.module.scss'

const TextArea = ({
    className = '',
    register = {},
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
        </label>
    );
}

export default TextArea;
