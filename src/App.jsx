import './components/styles/App.css'
import PostList from './components/PostList'
import { useMemo, useState, useEffect } from 'react'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'
import MyModal from './components/UI/modal/MyModal'
import Mybutton from './components/UI/button/Mybutton'
import { usePosts } from './components/hooks/usePosts'
import axios from 'axios'
import PostService from './components/API/PostService'
import Loader from './components/UI/loader/Loader'
import { useFatching } from './components/hooks/useFatching'
import { getPageCount, getPagesArray } from './components/utils/pages'

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '',})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const [totalPage, setTotalPage] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const [fetchPosts, isPostsLoading, postError]= useFatching(async ()=> {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPage(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    fetchPosts()
  }, [])
  let pageArray = getPagesArray(totalPage)
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  const changePage =()=>{
    setPage(page)
    
  }
  return (

    <div className='App'>
      <button onClick={fetchPosts} >Get Posts</button>
      <Mybutton
        style={{marginTop: 30}}
        onClick={()=>{setModal(true)}}
      >
      Создать пользователя
      </Mybutton>

      <MyModal visible={modal}
        setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {postError &&
      <h1>Произошла ошибка ${postError}</h1>
      }
      {isPostsLoading
        ?<div style={{display:'flex', justifyContent: 'center', marginTop: 50}} >
          <Loader/>
        </div>

        : <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title='Список постов 1'
        />
      }

      <div className='page__wrapper' >
        {pageArray.map(p=>
          <span
            onClick={()=>changePage(p)}
            key={p}
            className={page === p ? 'page page__current' : 'page'} >
            {p}
          </span>
        )}
      </div>

    </div>
  )
}

export default App
