
import './components/styles/App.css'
import { useRef, useState } from 'react'
import PostList from './components/PostList'
import Mybutton from './components/UI/button/Mybutton'
import MyInput from './components/UI/input/MyInput'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Discription' },
    { id: 2, title: 'Javascript', body: 'Discription' },
    { id: 3, title: 'Javascript', body: 'Discription' },
  ])

  const [title, setTitle] = useState('324')
  const bodyInputRef = useRef()

  const addNewPost = (e) => {
    e.preventDefault()
    console.log(title)
    console.log(bodyInputRef.current.value)
  }

  return (
    <div className='App'>
      <form>
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type='text'
          placeholder='Название поста'
        />
     
        <MyInput ref={bodyInputRef} type='text' placeholder='Описание поста' />
        <Mybutton onClick={addNewPost}>Создать пост</Mybutton>
      </form>
      <PostList posts={posts} title='Список постов 1' />
    </div>
  )
}

export default App
