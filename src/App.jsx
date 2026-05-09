import './components/styles/App.css'
import PostList from './components/PostList'
import { useState } from 'react'
import PostForm from './components/PostForm'
import MySelect from './components/UI/select/MySelect'
import MyInput from './components/UI/input/MyInput'

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Javascript',
      body: 'Discription',
    },
    {
      id: 2,
      title: 'Javascript',
      body: 'Discription',
    },
    {
      id: 3,
      title: 'Javascript',
      body: 'Discription',
    },
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuary, setsearchQuary] = useState('')

  const sortedPosts = [...posts].sort((a, b) =>
    a[sort].localeCompare(b[sort]),
  )

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts()
  }

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MyInput
          placeholder='Поиск'
          value={searchQuary}
          onChange={(e) => setsearchQuary(e.target.value)}
        />

        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Сортировка'
          options={[
            {
              value: 'title',
              name: 'По названию',
            },
            {
              value: 'body',
              name: 'По описанию',
            },
          ]}
        />
      </div>

      {posts.length ? (
        <PostList
          remove={removePost}
          posts={posts}
          title='Список постов 1'
        />
      ) : (
        <h1 style={{ textAlign: 'center' }}>
          Посты не найдеты!
        </h1>
      )}
    </div>
  )
}

export default App
