import { lazy, Suspense } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const LayoutPage = lazy(() => import('./companents/layout/LayoutPage'));
const HomePage = lazy(() => import('./page/home/HomePage'));
const AboutPage = lazy(() => import('./page/about/AboutPage'));
const SinglePage = lazy(() => import('./page/single-product/SinglePage'));
const AllProducts = lazy(() => import('./page/all-products/AllProducts'));
const CartPage = lazy(() => import('./page/cart/CartPage'));
const SearchPage = lazy(() => import('./page/search/SearchPage'));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center h-screen">
                  <RotatingLines
                    visible={true}
                    height="96"
                    width="96"
                    color="orangered"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                  />
                  <h1 className="text-[orangered] text-[32px]">Fast - Food</h1>
                </div>
        }
      >
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
