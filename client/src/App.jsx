import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './layouts/footer'
import Header from './layouts/header'
import AddPage from './pages/add-page'
import Detail from './pages/detail'
import Homepage from './pages/home-page'

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/home-page/:_id' element={<Detail/>}/>
        <Route path='/add-page' element={<AddPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
