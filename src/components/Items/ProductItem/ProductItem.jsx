import { useEffect, useRef, useState } from 'react';
import { DotsIcon } from '../../icons';
import cls from './ProductItem.module.scss'

const ProductItem = () => {
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
                src="http://megamix.uz/images/product_img/full/1472547305_275.jpg"
                alt=""
            />
            <p className={cls.item__name}>Клей для гранита, мрамора и травертина</p>
            <a
                className={cls.item__link}
                href="https://megamix.uz"
                target='_blank'
            >
                https://megamix.uz/faq
            </a>
            <span className={cls.item__date}>13.03.2021</span>
            <span className={cls.item__date}>Сухие смеси</span>
            <div style={{ position: 'relative', marginLeft: 'auto' }} ref={modalRef}>
                <button className={cls.item__btn} onClick={() => setIsOpenModal(state => !state)}>
                    <DotsIcon />
                </button>
                {isOpenModal && (
                    <div className={cls.item__modal} onClick={() => setIsOpenModal(false)}>
                        <button>Изменить</button>
                        <button>Удалить</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductItem;
