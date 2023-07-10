import { Checkbox } from '../Form/Checkbox';
import { DotsIcon } from '../icons';
import cls from './Item.module.scss'

const Item = () => {
    return (
        <div className={cls.item}>
            <Checkbox />
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
            <button className={cls.item__btn}>
                <DotsIcon />
            </button>
        </div>
    );
}

export default Item;
