import React, { useState } from 'react'
import Counter from './components/counter'
import ClassCounter from './components/ClassCounter'
import './components/styles/App.css'

function App() {
  const [value, setValue] = useState('текст в инпуте')

  function changeInput() {
    senValue()
  }

  return (
    <div className='App'>
      <Counter />
      <ClassCounter />

      <div className='post'>
        <div className='post__content'>
          <strong>1. Javascript</strong>
          <div>Javascript - язык програмирования</div>
        </div>
        <div className='post__btns'>
          <button>Удалить</button>
        </div>
      </div>
    </div>
  )
}

export default App
