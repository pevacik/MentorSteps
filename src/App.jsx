import Counter from './components/counter'
import ClassCounter from './components/ClassCounter'
import './components/styles/App.css'
import Postitem from './components/Postitem'
import { useState } from 'react'

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

  return (
    <div className='App'>
      <Counter />
      <ClassCounter />
      <Postitem
        post={{
          id: 1,
          title: 'Javascript',
          body: 'Discription',
        }}

      
      />
    </div>
  )
}

export default App
