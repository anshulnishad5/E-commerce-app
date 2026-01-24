import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

import Home from "./Pages/Home.jsx";
import Cart from "./Pages/Cart.jsx";
import Checkout from "./Pages/Checkout.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import OrderSummary from "./Pages/OrderSummary.jsx";
import Orders from "./Pages/Orders.jsx";
import Products from "./Pages/Products.jsx";
import Contact from "./Pages/Contact.jsx";
import TrackOrder from "./Pages/TrackOrder.jsx";
import Toast from "./Components/Toast.jsx";

function App ()
{
  const user = useSelector( state => state.auth.user );

  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navbar />
        <Toast />

        <main className="main-content">
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/products" element={ <Products /> } />
            <Route path="/cart" element={ <Cart /> } />

            <Route path="/login" element={ <Login /> } />
            <Route path="/register" element={ <Register /> } />
            <Route path="/contact" element={ <Contact /> } />

            <Route
              path="/checkout"
              element={ user ? <Checkout /> : <Navigate to="/login" /> }
            />

            <Route
              path="/order-summary"
              element={ user ? <OrderSummary /> : <Navigate to="/login" /> }
            />

            <Route
              path="/orders"
              element={ user ? <Orders /> : <Navigate to="/login" /> }
            />

            <Route
              path="/track/:id"
              element={ user ? <TrackOrder /> : <Navigate to="/login" /> }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
