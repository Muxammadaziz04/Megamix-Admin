import cls from './GreyButton.module.scss'

const GreyButton = ({
    children, 
    className
}) => {
    return (
        <button className={cls.btn + ' ' + className}>
            {children}
        </button>
    );
}

export default GreyButton;
