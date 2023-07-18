import cls from './BlackButton.module.scss'

const BlackButton = ({ children, className = '',  ...other }) => {
    return (
        <button className={cls.btn + ' ' + className} {...other}>
            {children}
        </button>
    );
}

export default BlackButton;
