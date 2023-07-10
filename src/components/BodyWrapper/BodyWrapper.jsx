import cls from './BodyWrapper.module.scss'

const BodyWrapper = ({
    navbar = <></>,
    body = <></>
}) => {
    return (
        <div className={cls.wrapper}>
            {navbar}
            <div>
                {body}
            </div>
        </div>
    );
}

export default BodyWrapper;
