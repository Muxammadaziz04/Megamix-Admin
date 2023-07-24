import { useEffect, useRef, useState } from 'react'
import { DotsIcon } from '../../icons'
import cls from './NewsItem.module.scss'

const NewsItem = ({
    image = '',
    title = '',
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
            <img src={image || '/images/empty-product.svg'} alt="" />
            <p>{title}</p>
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

export default NewsItem;
