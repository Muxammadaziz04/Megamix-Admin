import { Skeleton } from "antd";
import toast, { Toaster } from "react-hot-toast";
import { getVideoGallery, deleteVideoGallery } from "../../../services/gallery";
import { useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import GalleryItem from "../../../components/Items/GalleryItem";
import cls from './Body.module.scss'

const Body = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { data, isLoading } = useQuery(['videos'], getVideoGallery)

    const handleDeleteGallery = (id) => {
        toast.promise(new Promise((res, rej) => {
            deleteVideoGallery(id)
                .then(() => {
                    queryClient.invalidateQueries(['videos'])
                    res('')
                })
                .catch(() => rej(''))
        }), {
            loading: 'Удаляем галерею...',
            success: 'Галерея удалёна.',
            error: 'Что-то пошло не так'
        })
    }

    return (
        <div className={cls.body}>

            <div className={cls.body__tabs}>
                <span></span>
                <span className={cls.body__tabs__name}>Название</span>
                <Toaster />
            </div>
            <div>
                {
                    isLoading ? (
                        Array(10).fill(null).map((_, index) => (
                            <Skeleton.Node key={index} active style={{ width: '100%', height: '52px' }}> </Skeleton.Node>
                        ))
                    ) : (
                        data?.length > 0 && data?.map(video => (
                            <GalleryItem
                                type="video"
                                key={video.id}
                                image={video?.video}
                                title={video?.description}
                                onDelete={() => handleDeleteGallery(video.id)}
                                onUpdate={() => navigate(`/press-reliz/video/edit/${video.id}`)}
                            />
                        ))
                    )
                }
            </div>
        </div>
    );
}

export default Body;