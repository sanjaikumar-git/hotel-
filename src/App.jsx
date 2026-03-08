import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";



import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Payment from "./pages/Payment";
import Menu from "./pages/Menu";
import CartPage from "./pages/CartPage";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";



function App() {
  const [cart, setCart] = useState([]);

const addToCart = (item) => {
  const existingItem = cart.find((i) => i.id === item.id);

  if (existingItem) {
    setCart(
      cart.map((i) =>
        i.id === item.id
          ? { ...i, quantity: i.quantity + 1 }
          : i
      )
    );
  } else {
    setCart([...cart, { ...item, quantity: 1 }]);
  }
};

const increaseQty = (id) => {
  setCart(
    cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};


const decreaseQty = (id) => {
  setCart(
    cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};



  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar cartCount={cart.length} />
      <div className="max-w-7xl mx-auto px-4">
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route
  path="/menu"
  element={
    <Menu
      addToCart={addToCart}
      cart={cart}
      setCart={setCart}
    />
  }
/>

        <Route path="/reservation" element={<Reservation />} />
       <Route
  path="/payment"
  element={<Payment setCart={setCart} />}
/>


        <Route path="/contact" element={<Contact />} />
       <Route
  path="/cart"
  element={
    <CartPage
      cart={cart}
      increaseQty={increaseQty}
      decreaseQty={decreaseQty}
    />
  }
/>


      </Routes>
</div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

