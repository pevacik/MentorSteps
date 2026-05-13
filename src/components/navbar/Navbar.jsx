import { Link } from 'react-router-dom'
import Mybutton from '../UI/button/Mybutton'
import { useContext } from 'react'
import { AuthContext } from '../context'

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const logout = () =>{
    setIsAuth(false)
    localStorage.removeItem('auth')
  }
  return (
    <div className='navbar' >
      <Mybutton onClick={logout} >
        Выйти
      </Mybutton>
      <div className="navbar__links">
        <Link to="/posts">Посты</Link>
        <Link to="/about">О сайте</Link>
      </div>
    </div>
  )
}

export default Navbar