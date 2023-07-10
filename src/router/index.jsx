import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { MainLayout } from "../layouts/MainLayout"
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
          <Route path="press-reliz" element={<></>} />
        </Route>
      </Routes>
    )
  }
}

export default Router