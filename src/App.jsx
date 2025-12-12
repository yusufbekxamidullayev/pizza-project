import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LayoutPage from './companents/layout/LayoutPage'
import HomePage from './page/home/HomePage'
import AboutPage from './page/about/AboutPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App