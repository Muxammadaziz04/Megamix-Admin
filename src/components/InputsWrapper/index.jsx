import cls from './InputsWrapper.module.scss'

const InputsWrapper = ({
    children,
    title = '',
    className
}) => {
    return (
        <div className={cls.wrapper + ' ' + className}>
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
