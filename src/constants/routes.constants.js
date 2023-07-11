import { HomeIcon, PressIcon, ProductsIcon } from "../components/icons.jsx";

export const routes = [
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
        label: 'Продукты'
    },
    {
        id: 3, 
        link: '/press-reliz',
        icon: PressIcon,
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
    {
        id: 4, 
        link: '/about-company',
        icon: PressIcon,
        label: 'О компании',
        children: [
            {
                id: 1,
                link: '/about-company/description',
                label: 'О компании'
            },
            {
                id: 2,
                link: '/about-company/production',
                label: 'Производство'
            },
            {
                id: 3,
                link: '/about-company/sertificates',
                label: 'Сертификат'
            },
            {
                id: 4,
                link: '/about-company/honors',
                label: 'Награды'
            },
        ]
    },
]

export const routesName = {
    '': 'Главная',
    'products': 'Продукты',
    'press-reliz/news': 'Новости',
    'press-reliz/journal': 'Журнал',
    'press-reliz/vacancy': 'Вакансии',
    'press-reliz/foto': 'Фото галерея',
    'press-reliz/video': 'Видео галерея',
    'about-company/description': 'О компании',
    'about-company/production': 'Производство',
    'about-company/sertificates': 'Сертификаты',
    'about-company/honors': 'Награды',
}