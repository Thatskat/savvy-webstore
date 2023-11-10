import { Routes, Route } from "react-router-dom";
// LAYOUT COMPONENT
import Layout from "./components/layout/Layout";
import PrivateRoutes from "./components/PrivateRoutes";
// PAGES IMPORTS
import HomePage from "./pages/Home";
import CartPage from "./pages/Cart";
import WishlistPage from "./pages/Wishlist";

// STATIC PAGES
import StoresPage from "./pages/Stores";
import CareersPage from "./pages/Careers";
import AboutUsPage from "./pages/AboutUs";
import ReturnsPage from "./pages/Returns";
import ContactUsPage from "./pages/ContactUs";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import TermsConditionsPage from "./pages/TermsConditions";
import ShippingPage from "./pages/Shipping";
import StoreInfo from "./pages/Stores/StoreInfo";

// SHOP PAGES - MAIN
import ShopPage from "./pages/Shop";
import WomensPage from "./pages/Shop/Womens";
import MensPage from "./pages/Shop/Mens";
import KidsPage from "./pages/Shop/Kids";
import EntertainmentPage from "./pages/Shop/Entertainment";
import BeautyPage from "./pages/Shop/Beauty";
import BooksPage from "./pages/Shop/Books";
import CollectablesPage from "./pages/Shop/Collectables";
import ElectricalPage from "./pages/Shop/Electrical";
import FurniturePage from "./pages/Shop/Furniture";
import SportPage from "./pages/Shop/Sport";
import ToysPage from "./pages/Shop/Toys";
import HomewaresPage from "./pages/Shop/Homewares";

import ItemInfo from "./pages/Shop/ItemInfo";

// PROFILE PAGE
import Account from "./pages/Account";
import AddProduct from "./pages/Account/AddProduct";
import EditProduct from "./pages/Account/EditProduct";
import Edit from "./pages/Account/Edit";
import EditAccount from "./pages/Account/EditAccount";

// PAGE NOT FOUND
import PageNotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* CART AND WISHLIST */}
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        {/* STATIC PAGES */}
        <Route path="stores">
          <Route index element={<StoresPage />} />
          <Route path=":id" element={<StoreInfo />} />
        </Route>
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/returns" element={<ReturnsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-conditions" element={<TermsConditionsPage />} />
        <Route path="/shipping" element={<ShippingPage />} />
        {/* SHOP PAGES - MAIN */}
        <Route path="shop">
          <Route index element={<ShopPage />} />
          <Route path="womens" element={<WomensPage />} />
          <Route path="mens" element={<MensPage />} />
          <Route path="kids" element={<KidsPage />} />
          <Route path="entertainment" element={<EntertainmentPage />} />
          <Route path="health-beauty" element={<BeautyPage />} />
          <Route path="books" element={<BooksPage />} />
          <Route path="collectables" element={<CollectablesPage />} />
          <Route path="electrical" element={<ElectricalPage />} />
          <Route path="furniture" element={<FurniturePage />} />
          <Route path="homewares" element={<HomewaresPage />} />
          <Route path="outdoor-sport" element={<SportPage />} />
          <Route path="toys" element={<ToysPage />} />
          <Route path=":id" element={<ItemInfo />} />
        </Route>
        <Route path="account" element={<PrivateRoutes />}>
          <Route index element={<Account />} />
          <Route path="edit" element={<EditAccount />}/>
          <Route path="products">
            <Route path="add" element={<AddProduct />} />
            <Route path="overview" element={<EditProduct />} />
            <Route path="edit/:id" element={<Edit />} />
            
          </Route>
        </Route>
        {/* PAGE NOT FOUND */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
