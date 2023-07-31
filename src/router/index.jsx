import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { MainLayout } from "../layouts/MainLayout"
import NewsAdd from "../views/AddNews"
import AddProduct from "../views/AddProduct"
import News from "../views/News"
import { Products } from "../views/Products"
import EditProduct from '../views/EditProduct'
import NewsEdit from '../views/EditNews'
import HomePage from "../views/Home"
import FotoGallery from "../views/FotoGallery"
import AddFoto from "../views/AddFoto"
import EditFoto from "../views/EditFoto"
import VideoGallery from "../views/VideoGallery"
import AddVideo from "../views/AddVideo"
import EditVideo from "../views/EditVideo"
import Vacancies from "../views/Vacancies"
import AddVacancy from "../views/AddVacancy"
import Journal from "../views/Journal"
import Login from "../views/Login"

const Router = () => {
  const { isAuth } = useSelector((state) => state.auth)

  if (!isAuth) {
    return (
      <Routes>
        <Route path="*" element={<Login />} />
      </Routes>
    )
  } else {
    return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:categoryId" element={<Products />} />
          <Route path="products/:categoryId/add" element={<AddProduct />} />
          <Route path="products/:categoryId/edit/:productId" element={<EditProduct />} />
          <Route path="press-reliz" element={<></>} />
          <Route path="press-reliz/news" element={<News />} />
          <Route path="press-reliz/news/add" element={<NewsAdd />} />
          <Route path="press-reliz/news/edit/:newsId" element={<NewsEdit />} />
          <Route path="press-reliz/journal" element={<Journal />} />
          <Route path="press-reliz/vacancy" element={<Vacancies />} />
          <Route path="press-reliz/vacancy/add" element={<AddVacancy />} />
          <Route path="press-reliz/foto" element={<FotoGallery />} />
          <Route path="press-reliz/foto/add" element={<AddFoto />} />
          <Route path="press-reliz/foto/edit/:id" element={<EditFoto />} />
          <Route path="press-reliz/video" element={<VideoGallery />} />
          <Route path="press-reliz/video/add" element={<AddVideo />} />
          <Route path="press-reliz/video/edit/:id" element={<EditVideo />} />

          <Route path="about-company" element={<></>} />
          <Route path="about-company/production" element={<></>} />
          <Route path="about-company/description" element={<></>} />
          <Route path="about-company/sertificates" element={<></>} />
          <Route path="about-company/honors" element={<></>} />
        </Route>
      </Routes>
    )
  }
}

export default Router