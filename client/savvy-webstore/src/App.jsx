import { Routes, Route } from "react-router-dom";
// LAYOUT COMPONENT
import Layout from "./components/layout/Layout";
// PAGES IMPORTS
import HomePage from "./pages/Home";
import CartPage from "./pages/Cart";
import WishlistPage from './pages/Wishlist'

// STATIC PAGES
import StoresPage from "./pages/Stores";
import CareersPage from "./pages/Careers";
import AboutUsPage from "./pages/AboutUs";
import ReturnsPage from "./pages/Returns";
import ContactUsPage from "./pages/ContactUs";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import TermsConditionsPage from "./pages/TermsConditions";

// SHOP PAGES - MAIN
import ShopPage from "./pages/Shop";
import WomensPage from "./pages/Shop/Womens";
import MensPage from "./pages/Shop/Mens";
import KidsPage from "./pages/Shop/Kids";

// PAGE NOT FOUND
import PageNotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* CART AND WISHLIST */}
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />}/>
        {/* STATIC PAGES */}
        <Route path="/stores" element={<StoresPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/returns" element={<ReturnsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-conditions" element={<TermsConditionsPage />} />
        {/* SHOP PAGES - MAIN */}
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/womens" element={<WomensPage />} />
        <Route path="/shop/mens" element={<MensPage />} />
        <Route path="/shop/kids" element={<KidsPage />} />
        {/* PAGE NOT FOUNF */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
