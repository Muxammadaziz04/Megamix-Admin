import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { MainLayout } from "../layouts/MainLayout"
import AddProduct from "../views/AddProduct"
import { Products } from "../views/Products"

const Router = () => {
  const isAuth = useSelector((state) => state.auth)

  if (!isAuth) {
    return (
      <Routes>
        <Route path="/" element={<></>} />
      </Routes>
    )
  } else {
    return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="products" element={<Products />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="press-reliz" element={<></>} />
          <Route path="press-reliz/news" element={<></>} />
          <Route path="press-reliz/journal" element={<></>} />
          <Route path="press-reliz/vacancy" element={<></>} />
          <Route path="press-reliz/foto" element={<></>} />
          <Route path="press-reliz/video" element={<></>} />

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