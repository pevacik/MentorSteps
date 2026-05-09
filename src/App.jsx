import './components/styles/App.css'
import PostList from './components/PostList'
import Mybutton from './components/UI/button/Mybutton'
import MyInput from './components/UI/input/MyInput'
import { useState } from 'react'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Discription' },
    { id: 2, title: 'Javascript', body: 'Discription' },
    { id: 3, title: 'Javascript', body: 'Discription' },
  ])

  const [post, setPost] = useState({ title: '', body: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, { ...post, id: Date.now() }])
    setPost({ title: '', body: '' })
  }

  return (
    <div className='App'>
      <form>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type='text'
          placeholder='Название поста'
        />

        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type='text'
          placeholder='Описание поста'
        />
        <Mybutton onClick={addNewPost}>Создать пост</Mybutton>
      </form>
      <PostList posts={posts} title='Список постов 1' />
    </div>
  )
}

export default App
