import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LayoutPage from './companents/layout/LayoutPage'
import HomePage from './page/home/HomePage'
import AboutPage from './page/about/AboutPage'
import SinglePage from './page/single-product/SinglePage'
import AllProducts from './page/all-products/AllProducts'
import CartPage from './page/cart/CartPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path='/:id' element={<AllProducts/>}/>
          <Route path='products/:id' element={<SinglePage/>}/>
          <Route path='products/:id' element={<CartPage/>}/>
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App