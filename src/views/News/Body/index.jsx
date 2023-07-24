import { Skeleton } from 'antd'
import { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import NewsItem from '../../../components/Items/NewsItem'
import { deleteNews, getNews } from '../../../services/news'
import cls from './Body.module.scss'

const Body = () => {
    const navigate = useNavigate()
    const { ref, inView } = useInView()
    const queryClient = useQueryClient()
    const { data, isLoading: isNewsLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
        ['news'],
        async ({ pageParam = 1 }) => await getNews({ page: pageParam, limit: 6, }) || {},
        {
            getNextPageParam: (lastPage, pages) => {
                return lastPage?.count > pages?.length * 6 ? pages.length + 1 : undefined
            }
        }
    )
    const news = data?.pages?.reduce((acc, page) => [...acc, ...page?.rows], []) || []

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage()
        }
    }, [inView])

    const handleDeleteNews = (id) => {
        toast.promise(new Promise((res, rej) => {
            deleteNews(id)
                .then(() => {
                    queryClient.invalidateQueries(['news'])
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
                    news?.length > 0 && news?.map(news => (
                        <NewsItem
                            key={news.id}
                            image={news?.image}
                            title={news?.ru?.title || news?.uz?.title || news?.en?.title || news?.tr?.title || news?.tj?.title}
                            onDelete={() => handleDeleteNews(news?.id)}
                            onUpdate={() => navigate(`/press-reliz/news/edit/${news?.id}`)}
                        />
                    ))
                }
                {
                    isNewsLoading && (
                        Array(5).fill(null).map((_, index) => (
                            <Skeleton.Node key={index} active style={{ width: '100%', height: '52px' }}> </Skeleton.Node>
                        ))
                    )
                }
                <div style={{ padding: "10px 0" }} ref={ref}></div>
            </div>
        </div>
    );
}

export default Body;
