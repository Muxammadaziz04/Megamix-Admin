import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"

const Router = () => {
  const isAuth = useSelector((state) => state.auth.isAuth)

  if (!isAuth)
    return (
      <Routes>
        <Route path="/" element={<></>} />
      </Routes>
    )

  return (
    <Routes>
      <Route path="/" element={<></>} />
    </Routes>
  )
}

export default Router
