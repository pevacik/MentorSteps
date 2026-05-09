import Counter from './components/counter'
import ClassCounter from './components/ClassCounter'
import './components/styles/App.css'
import Postitem from './components/Postitem'
import { useState } from 'react'
import PostList from './components/PostList'
import Mybutton from './components/UI/button/Mybutton'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Discription' },
    { id: 2, title: 'Javascript', body: 'Discription' },
    { id: 3, title: 'Javascript', body: 'Discription' },
  ])

  return (
    <div className='App'>
      <form>
        <input type='text' placeholder='Название поста' />
        <input type='text' placeholder='Описание поста' />
        <Mybutton>Создать пост</Mybutton>
      </form>
      <PostList posts={posts} title='Список постов 1' />
    </div>
  )
}

export default App
