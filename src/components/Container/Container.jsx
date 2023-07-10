import cls from './Container.module.scss'

const Container = ({ children, className = '' }) => {
    return (
        <div className={`${cls.container} ${className}`}>
            {children}
        </div>
    );
}

export default Container;
