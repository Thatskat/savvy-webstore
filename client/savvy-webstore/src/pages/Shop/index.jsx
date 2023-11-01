import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";

import useAuth from "../../hooks/useAuth";
import productService from "../../services/productService";

import ItemCard from "../../components/common/ItemCard";
import SearchBar from "../../components/features/SearchBar";
import shopSVG from "../../assets/savvy-shop.svg";
import * as styles from "./Shop.css";

const ShopPage = () => {
  const { user } = useAuth();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Shop All Categories | Savvy WebStore</title>
      </Helmet>
      <div className={styles.shopHeader}>
        <div className="heading">
          <img src={shopSVG} alt="Shop" />
          <h1>All Categories</h1>
        </div>
      </div>
      <SearchBar />
      <p className={styles.itemShow}>
        Showing <span>#</span> out of #{" "}
      </p>
      <div className={styles.itemsGrid}>
        <ItemCard
          title="Buffy the Vampire Slayer Season One"
          image="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1905&q=80"
          id="2"
          price="10"
          location="Moorabbin, Vic"
        />
      </div>
    </div>
  );
};

export default ShopPage;
