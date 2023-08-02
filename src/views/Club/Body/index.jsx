import toast, { Toaster } from 'react-hot-toast'
import { useQuery, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { getClub, deleteClub } from '../../../services/club'
import NewsItem from '../../../components/Items/NewsItem'
import cls from './Body.module.scss'
import Loader from '../../../components/Loader'

const Body = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { data: news, isLoading } = useQuery(['club'], getClub)
console.log(news);
    const handleDeleteNews = (id) => {
        toast.promise(new Promise((res, rej) => {
            deleteClub(id)
                .then(() => {
                    queryClient.invalidateQueries(['club'])
                    res('')
                })
                .catch(() => rej(''))
        }), {
            loading: 'Удаляем новость...',
            success: 'Новость удалён.',
            error: 'Что-то пошло не так'
        })
    }

    return (
        <div className={cls.body}>
            <div className={cls.body__tabs}>
                <span className={cls.body__tabs__img}>Картинка</span>
                <span className={cls.body__tabs__desc}>Тема</span>
                <Toaster />
            </div>
            <div>
                {
                    isLoading ? (
                        Array(10).fill(null).map((_, index) => (
                            <Loader key={index} />
                        ))
                    ) : (
                        news?.length > 0 && news?.map(news => (
                            <NewsItem
                                key={news.id}
                                image={news?.image}
                                title={news?.ru?.title || news?.uz?.title || news?.en?.title || news?.tr?.title || news?.tj?.title}
                                onDelete={() => handleDeleteNews(news?.id)}
                                onUpdate={() => navigate(`/club/edit/${news?.id}`)}
                            />
                        ))
                    )
                }
            </div>
        </div>
    );
}

export default Body;
