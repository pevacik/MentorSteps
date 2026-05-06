import React, { useState } from 'react'
import Counter from './components/counter'
import ClassCounter from './components/ClassCounter'

function App() {
  const [value, setValue] = useState('текст в инпуте')

  function changeInput() {
    senValue()
  }

  return (
    <div>
      <Counter />
      <ClassCounter />
      
    </div>
  )
}

export default App
