import './components/styles/App.css'
import PostList from './components/PostList'
import { useState } from 'react'
import PostForm from './components/PostForm'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Discription' },
    { id: 2, title: 'Javascript', body: 'Discription' },
    { id: 3, title: 'Javascript', body: 'Discription' },
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  return (
    <div className='App'>
      <PostForm create={createPost} />
      <PostList posts={posts} title='Список постов 1' />
    </div>
  )
}

export default App
