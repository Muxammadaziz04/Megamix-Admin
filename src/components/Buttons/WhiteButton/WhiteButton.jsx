import cls from './WhiteButton.module.scss'

const WhiteButton = ({ children, ...other }) => {
    return (
        <button className={cls.btn} {...other}>
            {children}
        </button>
    );
}

export default WhiteButton;
