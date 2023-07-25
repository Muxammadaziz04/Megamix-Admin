import { Skeleton } from "antd";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useInfiniteQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import { ProductItem } from "../../../components/Items/ProductItem";
import { deleteProduct, getProducts } from "../../../services/product";
import cls from './Body.module.scss'
import GalleryItem from "../../../components/Items/GalleryItem";

const Body = () => {
    const params = useParams()
    const navigate = useNavigate()
    const { ref, inView } = useInView()
    const queryClient = useQueryClient()
    const { data, isLoading: isProductLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
        ['products', params.categoryId],
        async ({ pageParam = 1, queryKey }) => await getProducts({ categoryId: queryKey[1], page: pageParam, limit: 15, lang: 'ru' }) || {},
        {
            getNextPageParam: (lastPage, pages) => {
                return lastPage?.count > pages?.length * 15 ? pages.length + 1 : undefined
            }
        }
    )
    const products = data?.pages?.reduce((acc, page) => [...acc, ...page?.rows], []) || []

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage()
        }
    }, [inView])

    const handleDeleteProduct = (id) => {
        toast.promise(new Promise((res, rej) => {
            deleteProduct(id)
                .then(() => {
                    queryClient.invalidateQueries(['products', params.categoryId])
                    res('')
                })
                .catch(() => rej(''))
        }), {
            loading: 'Удаляем продукт...',
            success: 'Продукт удалён.',
            error: 'Что-то пошло не так'
        })
    }

    return (
        <div className={cls.body}>
            <div className={cls.body__tabs}>
                <span></span>
                <span className={cls.body__tabs__name}>Альбом</span>
                <span className={cls.body__tabs__shortdesc}>Кол-во фотографии</span>
                <Toaster />
            </div>
            <div>
                <GalleryItem />
                {/* {
                    products?.length > 0 && products?.map(prd => (
                        <ProductItem
                            key={prd.id}
                            image={prd?.foto}
                            name={prd?.title}
                            shortDescription={prd?.shortDescription}
                            description={prd?.description}
                            video={!!prd?.video}
                            weight={prd?.weight}
                            onDelete={() => handleDeleteProduct(prd.id)}
                            onChange={() => navigate(`edit/${prd?.id}`)}
                        />
                    ))
                }
                {
                    isProductLoading && (
                        Array(10).fill(null).map((_, index) => (
                            <Skeleton.Node key={index} active style={{ width: '100%', height: '52px' }}> </Skeleton.Node>
                        ))
                    )
                } */}
                <div style={{ padding: "10px 0" }} ref={ref}></div>
            </div>
        </div>
    );
}

export default Body;