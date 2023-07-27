import { Skeleton } from "antd";
import toast, { Toaster } from "react-hot-toast";
import { deleteFotoGallery, getFotoGallery } from "../../../services/gallery";
import { useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import GalleryItem from "../../../components/Items/GalleryItem";
import cls from './Body.module.scss'

const Body = () => {
    const params = useParams()
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { data, isLoading } = useQuery(['fotos'], getFotoGallery)

    const handleDeleteGallery = (id) => {
        toast.promise(new Promise((res, rej) => {
            deleteFotoGallery(id)
                .then(() => {
                    queryClient.invalidateQueries(['fotos'])
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
                <span className={cls.body__tabs__name}>Альбом</span>
                <span className={cls.body__tabs__shortdesc}>Кол-во фотографии</span>
                <Toaster />
            </div>
            <div>
                {
                    isLoading ? (
                        Array(10).fill(null).map((_, index) => (
                            <Skeleton.Node key={index} active style={{ width: '100%', height: '52px' }}> </Skeleton.Node>
                        ))
                    ) : (
                        data?.length > 0 && data?.map(foto => (
                            <GalleryItem
                                key={foto.id}
                                image={foto?.images?.[0]}
                                title={foto?.description}
                                count={foto?.images?.length}
                                onDelete={() => handleDeleteGallery(foto.id)}
                                onUpdate={() => navigate(`/press-reliz/foto/edit/${foto.id}`)}
                            />
                        ))
                    )
                }
            </div>
        </div>
    );
}

export default Body;