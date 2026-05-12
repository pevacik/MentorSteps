import About from '../components/pages/About'
import Login from '../components/pages/Login'
import PostIdPage from '../components/pages/PostIdPage'
import Posts from '../components/pages/Posts'

export const privateRoutes = [
  {path:'/about', component: About},
  {path:'/posts', component: Posts},
  {path:'/posts/:id', component: PostIdPage},
]

export const publicRoutes = [
  {path:'/login', component: Login},
]