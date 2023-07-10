import cls from './WhiteButton.module.scss'

const WhiteButton = ({children}) => {
    return (
        <button className={cls.btn}>
            {children}
        </button>
    );
}

export default WhiteButton;
