import Mybutton from '../UI/button/Mybutton'
import MyInput from '../UI/input/MyInput'

const Login = () => {
  return (
    <div>
      <h1>Страница для логина</h1>
      <form>
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <Mybutton>Войти</Mybutton>
      </form>
    </div>
  )
}

export default Login