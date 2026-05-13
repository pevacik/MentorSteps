import { useContext } from 'react'
import Mybutton from '../UI/button/Mybutton'
import MyInput from '../UI/input/MyInput'
import { AuthContext } from '../context'

const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const login = event => {

    event.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', true)
  }

  return (
    <div>
      <h1>Страница для логина</h1>
      <form onSubmit={login} >
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <Mybutton>Войти</Mybutton>
      </form>
    </div>
  )
}

export default Login