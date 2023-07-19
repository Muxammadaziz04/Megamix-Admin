import cls from './GreyButton.module.scss'

const GreyButton = ({
    children, 
    className = '',
    active = false,
    ...other
}) => {
    return (
        <button className={`${cls.btn} ${cls.className} ${active ? cls.active : ''}`} {...other}>
            {children}
        </button>
    );
}

export default GreyButton;