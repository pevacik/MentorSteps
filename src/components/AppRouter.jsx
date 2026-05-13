import { Navigate, Route, Routes } from 'react-router-dom'
import { publicRoutes, privateRoutes } from '../router'
import { useContext } from 'react'
import { AuthContext } from './context'
import Loader from './UI/loader/Loader'

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)
  if (isLoading) {
    return <Loader/>
  }

  return (
    isAuth
      ? <Routes>

        {privateRoutes.map((route) => {
          return (
            <Route
              element={<route.component />}
              path={route.path}
              key={route.path}
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
              key={route.path}
            />
          )
        })}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>

  )
}

export default AppRouter