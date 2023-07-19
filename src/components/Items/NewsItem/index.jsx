import { useEffect, useRef, useState } from 'react'
import { DotsIcon } from '../../icons'
import cls from './NewsItem.module.scss'

const NewsItem = () => {
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
            <img src="/news.png" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In temporibus corporis molestias, excepturi tempora commodi voluptatibus officiis ut quasi nesciunt consequatur libero, cumque neque id iusto sequi odio velit praesentium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sunt facere temporibus, earum omnis quae natus iusto sapiente illum, maiores perferendis reiciendis quod nesciunt qui. Officiis qui fugiat porro dolorum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias perspiciatis numquam recusandae, ea, consectetur architecto incidunt fuga doloribus est dignissimos esse ex explicabo sed cum sint dolor quasi deleniti repellat? Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Giving information on its origins, as well as a random Lipsum generator.</p>
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

export default NewsItem;
