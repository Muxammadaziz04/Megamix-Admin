import NewsItem from '../../../components/Items/NewsItem'
import cls from './Body.module.scss'

const Body = () => {
    return (
        <div className={cls.body}>
            <div className={cls.body__tabs}>
                <span className={cls.body__tabs__img}>Картинка</span>
                <span className={cls.body__tabs__desc}>Тема</span>
            </div>
            <div>
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
            </div>
        </div>
    );
}

export default Body;
