import { useEffect, useRef, useState } from 'react';
import { DotsIcon, PlayIcon } from '../../icons';
import cls from './ProductItem.module.scss'

const ProductItem = ({
    image = '',
    name = '',
    shortDescription = '',
    description = '',
    video = false,
    weight = '',
    onDelete = () => {},
    onChange = () => {}
}) => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const modalRef = useRef()

    useEffect(() => {
        const handleClickOutSide = (e) => {
            if(!modalRef.current.contains(e.target)){
                setIsOpenModal(false)
            }
        }

        window.addEventListener('click', handleClickOutSide)
        return () => window.removeEventListener('click', handleClickOutSide)
    }, [])

    return (
        <div className={cls.item}>
            <span></span>
            <img
                className={cls.item__img}
                src={image || '/images/empty-product.svg'}
                alt=""
            />
            <p className={cls.item__name}>{name}</p>
            <p className={cls.item__shortdesc}>{shortDescription}</p>
            <p className={cls.item__desc}>{description}</p>
            <span className={cls.item__video}>{video && <><PlayIcon /> Видео</>}</span>
            <span className={cls.item__date}>{weight && <>{weight}</>}</span>
            <div style={{ position: 'relative', marginLeft: 'auto' }} ref={modalRef}>
                <button className={cls.item__btn} onClick={() => setIsOpenModal(state => !state)}>
                    <DotsIcon />
                </button>
                {isOpenModal && (
                    <div className={cls.item__modal} onClick={() => setIsOpenModal(false)}>
                        <button onClick={onChange}>Изменить</button>
                        <button onClick={onDelete}>Удалить</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductItem;
