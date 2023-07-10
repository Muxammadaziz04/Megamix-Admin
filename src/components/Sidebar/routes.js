import { HomeIcon, PressIcon, ProductsIcon } from "../icons";

const routes = [
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
        label: 'Пресс-релиз'
    },
]

export default routes