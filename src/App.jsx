import Counter from './components/counter'
import ClassCounter from './components/ClassCounter'
import './components/styles/App.css'
import Postitem from './components/Postitem'

function App() {
  return (
    <div className='App'>
      <Counter />
      <ClassCounter />
      <Postitem />
    </div>
  )
}

export default App
