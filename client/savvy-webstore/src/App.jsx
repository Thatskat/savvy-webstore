import { Routes, Route } from "react-router-dom";
// LAYOUT COMPONENT
import Layout from "./components/layout/Layout";
// PAGES IMPORTS
import HomePage from "./pages/Home";
import CartPage from "./pages/Cart";
import StoresPage from "./pages/Stores";
import ShopPage from "./pages/Shop";
import WomensPage from "./pages/Shop/Womens";
import PageNotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/stores" element={<StoresPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/womens" element={<WomensPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
