import { Skeleton } from 'antd';
import toast, { Toaster } from 'react-hot-toast';
import { useQuery, useQueryClient } from 'react-query';
import VacancyItem from '../../../components/Items/VacancyItem';
import { deleteVacancy, getVacancy } from '../../../services/vacancy';
import cls from './Body.module.scss'

const Body = () => {
    const queryClient = useQueryClient()
    const { data, isLoading } = useQuery(['vacancies'], getVacancy)

    const handleDeleteVacancy = (id) => {
        toast.promise(new Promise((res, rej) => {
            deleteVacancy(id)
                .then(() => {
                    queryClient.invalidateQueries(['vacancies'])
                    res('')
                })
                .catch(() => rej(''))
        }), {
            loading: 'Удаляем вакансию...',
            success: 'Вакансия удалёна.',
            error: 'Что-то пошло не так'
        })
    }

    return (
        <div className={cls.body}>
            <div className={cls.body__tabs}>
                <span className={cls.body__tabs__name}>Вакансия</span>
                <span className={cls.body__tabs__shortdesc}>Зарплата</span>
                <Toaster />
            </div>
            <div>
                {
                    isLoading ? (
                        Array(10).fill(null).map((_, index) => (
                            <Skeleton.Node key={index} active style={{ width: '100%', height: '52px' }}> </Skeleton.Node>
                        ))
                    ) : (
                        data?.length > 0 && data?.map(vacancy => (
                            <VacancyItem
                                key={vacancy.id}
                                title={vacancy?.description}
                                salary={vacancy?.salary}
                                onDelete={() => handleDeleteVacancy(vacancy.id)}
                            />
                        ))
                    )
                }
            </div>
        </div>
    );
}

export default Body;
