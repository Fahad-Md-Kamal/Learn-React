import "./App.css";
import Welcome from "./components/Welcome";
import { Routes, Route, Navigate } from "react-router-dom";
import Products from "./components/Products";
import MainHeader from "./components/Header/MainHeader";
import ProductDetail from "./components/Product/ProductDetail";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to='/welcome' />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
