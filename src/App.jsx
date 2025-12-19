import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LayoutPage from './companents/layout/LayoutPage'
import HomePage from './page/home/HomePage'
import AboutPage from './page/about/AboutPage'
import SinglePage from './page/single-product/SinglePage'
import AllProducts from './page/all-products/AllProducts'
import CartPage from './page/cart/CartPage'
import SearchPage from './page/search/SearchPage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path='/:id' element={<AllProducts />} />
          <Route path='products/:id' element={<SinglePage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path='/search' element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App