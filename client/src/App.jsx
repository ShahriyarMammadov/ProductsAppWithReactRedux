import { Route, Routes } from 'react-router-dom'
import './App.css'
import FooterComp from './assets/layouts/footer'
import HeaderComponent from './assets/layouts/header'
import AddProducts from './assets/pages/addProducts'
import HomePage from './assets/pages/homePage'
import ModalPage from './assets/pages/modalPage'

function App() {

  return (
    <div className="App">
      <HeaderComponent />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/modalPage/:id' element={<ModalPage />} />
        <Route path='/addProducts' element={<AddProducts />} />
      </Routes>
      <FooterComp />
    </div>
  )
}

export default App
