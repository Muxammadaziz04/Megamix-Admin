import cls from './InputsWrapper.module.scss'

const InputsWrapper = ({
    children,
    title = ''    
}) => {
    return (
        <div className={cls.wrapper}>
            <div>
                {title}
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}

export default InputsWrapper;
