import { useQuery } from "react-query";
import { Outlet } from "react-router-dom";
import { Container } from "../../components/Container";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import cls from './MainLayout.module.scss'

const MainLayout = () => {    
    return (
        <div className={cls.layout}>
            <Navbar />
            <Container className={cls.layout__container}>
                <Sidebar />
                <div className={cls.layout__body}>
                    <Outlet />
                </div>
            </Container>
        </div>
    );
}

export default MainLayout;
