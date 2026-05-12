import { useEffect, useState } from 'react'
import PostService from '../API/PostService'
import PostFilter from '../PostFilter'
import PostForm from '../PostForm'
import PostList from '../PostList'
import Mybutton from '../UI/button/Mybutton'
import Loader from '../UI/loader/Loader'
import MyModal from '../UI/modal/MyModal'
import Pagination from '../UI/pagination/Pagination'
import { useFatching } from '../hooks/useFatching'
import { usePosts } from '../hooks/usePosts'
import '../styles/App.css'
import { getPageCount } from '../utils/pages'

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '',})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const [totalPage, setTotalPage] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const [fetchPosts, isPostsLoading, postError]= useFatching(async (limit, page)=> {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPage(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    fetchPosts(limit, page)
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  const changePage =(page)=>{
    setPage(page)
    fetchPosts(limit, page)

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
      <Pagination
        page={page}
        changePage={changePage}
        totalPage={totalPage}/>

    </div>
  )
}

export default Posts
