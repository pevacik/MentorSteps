import { Navigate, Route, Routes } from 'react-router-dom'
import { publicRoutes, privateRoutes } from '../router'

const AppRouter = () => {
  const isAuth = false
  return (
    isAuth
      ? <Routes>

        {privateRoutes.map((route) => {
          return (
            <Route
              element={<route.component />}
              path={route.path}
            />
          )
        })}
        <Route path="*" element={<Navigate to="/posts" replace />} />
      </Routes>
      :<Routes>

        {publicRoutes.map((route) => {
          return (
            <Route
              element={<route.component />}
              path={route.path}
            />
          )
        })}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>

  )
}

export default AppRouter