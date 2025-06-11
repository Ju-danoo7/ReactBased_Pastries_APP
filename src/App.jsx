import { BrowserRouter, Routes, Route } from "react-router"
import Layout from "./assets/components/Layout"
import { Suspense, lazy } from 'react';

const Order = lazy(() => import('./assets/components/pages/Cart'));
const Register = lazy(() => import('./assets/components/pages/Profile'));
const Services = lazy(() => import('./assets/components/pages/Services'));
const Products = lazy(() => import('./assets/components/pages/Products'));
const Home = lazy(() => import("./assets/components/pages/Homepage"));

function App() {

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<Home />} />
              <Route path="cart" element={<Order />} />
              <Route path="profile" element={<Register />} />
              <Route path="products" element={<Products />} />
              <Route path="services" element={<Services />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
