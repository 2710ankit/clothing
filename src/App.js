import React from "react";
import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import Authenticate from "./routes/authenticate/Authenticate";
import Shop from "./routes/shop/Shop";
import Checkout from "./routes/checkout/Checkout";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authenticate />} />
        <Route path="shop/*" element={<Shop />}>
          <Route/>
        </Route>
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
