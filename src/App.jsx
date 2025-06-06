import { BrowserRouter, Routes, Route } from "react-router"
import Layout from "./assets/components/Layout"
import Home from "./assets/components/pages/HomePage"
import Order from "./assets/components/pages/Cart"
import Register from "./assets/components/pages/Profile"
import Services from "./assets/components/pages/Services"
import Products from "./assets/components/pages/Products"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="cart" element={<Order />} />
            <Route path="profile" element={<Register />} />
            <Route path="products" element={<Products />} />
            <Route path="services" element={<Services />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
