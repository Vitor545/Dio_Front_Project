import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CartPage from "../pages/CartPage";
import Product from "../pages/Product";
import SingUpPage from "../pages/SingUpPage";
import SingPage from "../pages/SingPage";
import EditProduct from "../components/EditProduct";
import CadastroProduct from "../components/CadastroProduct";
import SearchProduct from "../pages/SearchProduct";
import MyOrders from "../pages/MyOrders";
import ProductCadastrados from "../components/ProductCadastrados";

const RoutesComponents = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produto/:id" element={<Product />} />
      <Route path="/carrinho" element={<CartPage />} />
      <Route path="/singup" element={<SingUpPage />} />
      <Route path="/editproduct/:id" element={<EditProduct />} />
      <Route path="/cadastroproduct" element={<CadastroProduct />} />
      <Route path="/search" element={<SearchProduct />} />
      <Route path="/orders" element={<MyOrders />} />
      <Route path="/produtoscadastrados" element={<ProductCadastrados />} />
      <Route path="/login" element={<SingPage />} />
    </Routes>
  );
};

export default RoutesComponents;
