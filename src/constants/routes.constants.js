import { AboutCompanyIcon, GiftIcon, HomeIcon, PressIcon, PressRelizIcon, ProductsIcon, SliderIcon } from "../components/icons.jsx";

export const routes = (productChilds) => (
    [
        {
            id: 1, 
            link: '/',
            icon: HomeIcon,
            label: 'Главная'
        },
        {
            id: 2, 
            link: '/products',
            icon: ProductsIcon,
            label: 'Продукты',
            children: productChilds || []
        },
        {
            id: 3, 
            link: '/press-reliz',
            icon: PressRelizIcon,
            label: 'Пресс-релиз',
            children: [
                {
                    id: 1,
                    link: '/press-reliz/news',
                    label: 'Новости'
                },
                {
                    id: 2,
                    link: '/press-reliz/journal',
                    label: 'Журнал'
                },
                {
                    id: 3,
                    link: '/press-reliz/vacancy',
                    label: 'Вакансии'
                },
                {
                    id: 4,
                    link: '/press-reliz/foto',
                    label: 'Фото галерея'
                },
                {
                    id: 5,
                    link: '/press-reliz/video',
                    label: 'Видео галерея'
                },
            ]
        },
        // {
        //     id: 4, 
        //     link: '/about-company',
        //     icon: AboutCompanyIcon,
        //     label: 'О компании',
        //     children: [
        //         {
        //             id: 1,
        //             link: '/about-company/description',
        //             label: 'О компании'
        //         },
        //         {
        //             id: 2,
        //             link: '/about-company/production',
        //             label: 'Производство'
        //         },
        //         {
        //             id: 3,
        //             link: '/about-company/sertificates',
        //             label: 'Сертификат'
        //         },
        //         {
        //             id: 4,
        //             link: '/about-company/honors',
        //             label: 'Награды'
        //         },
        //     ]
        // },
        {
            id: 5, 
            link: '/club',
            icon: GiftIcon,
            label: 'Клуб мастеров'
        },
        {
            id: 6, 
            link: '/slider',
            icon: SliderIcon,
            label: 'Слайд баннер'
        },
    ]
)

export const routesName = {
    '': 'Главная',
    'products': 'Продукты',
    'products/add': 'Добавить продукт',
    'press-reliz/news': 'Новости',
    'press-reliz/news/add': 'Добавить новости',
    'press-reliz/journal': 'Журнал',
    'press-reliz/vacancy': 'Вакансии',
    'press-reliz/foto': 'Фото галерея',
    'press-reliz/video': 'Видео галерея',
    'about-company/description': 'О компании',
    'about-company/production': 'Производство',
    'about-company/sertificates': 'Сертификаты',
    'about-company/honors': 'Награды',
}