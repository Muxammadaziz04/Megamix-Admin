import { ProductItem } from "../../../../components/Items/ProductItem";
import cls from './Body.module.scss'

const Body = () => {
    return (
        <div className={cls.body}>
            <div className={cls.body__tabs}>
                <span></span>
                <span className={cls.body__tabs__name}>Названия</span>
                <span className={cls.body__tabs__shortdesc}>Короткое описание</span>
                <span className={cls.body__tabs__desc}>Технические характеристики</span>
                <span className={cls.body__tabs__video}>Видео</span>
                <span className={cls.body__tabs__pack}>Упаковка</span>
            </div>
            <div>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </div>
    );
}

export default Body;
