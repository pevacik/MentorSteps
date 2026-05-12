import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import './components/styles/App.css'
import About from './components/pages/About'
import Posts from './components/pages/Posts'
import Navbar from './components/navbar/Navbar'
import Error from './components/pages/Error'
import AppRouter from './components/AppRouter'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>

  )
}

export default App
