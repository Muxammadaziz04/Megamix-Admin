import { useEffect, useRef, useState } from 'react'
import { DotsIcon } from '../../icons'
import cls from './GalleryItem.module.scss'

const GalleryItem = ({
    image = '',
    title = '',
    count = '',
    type = 'image',
    onDelete = () => {},
    onUpdate = () => {}
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
            {type === 'image' && <img className={cls.item__img} src={image} />}
            {type === 'video' && <video className={cls.item__img} src={image} />}
            <p className={cls.item__title}>{title}</p>
            <span>{count}</span>
            <div style={{ position: 'relative', marginLeft: 'auto' }} ref={modalRef}>
                <button className={cls.item__btn} onClick={() => setIsOpenModal(state => !state)}>
                    <DotsIcon />
                </button>
                {isOpenModal && (
                    <div className={cls.item__modal} onClick={() => setIsOpenModal(false)}>
                        <button onClick={onUpdate}>Изменить</button>
                        <button onClick={onDelete}>Удалить</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default GalleryItem;
