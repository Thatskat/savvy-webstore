import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";

import productService from "../../services/productService";

import ItemCard from "../../components/common/ItemCard";
import SearchBar from "../../components/features/SearchBar";
import shopSVG from "../../assets/savvy-shop.svg";
import * as styles from "./Shop.css";

const ShopPage = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const hasRun = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (hasRun.current === false) {
      fetchProducts();
      setLoading(false);
      return () => {
        hasRun.current = true;
      };
    }
  }, []);

  async function fetchProducts() {
    try {
      const res = await productService.getAll();
      const data = await res.data;
      setData(data);
      console.log(data);
    } catch (err) {
      setError(true);
      console.error(err?.response);
    }
  }

  if (error) {
    return <p>error</p>;
  }

  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <div>
      <Helmet>
        <title>Shop All Categories | Savvy WebStore</title>
      </Helmet>
      <div className={`${styles.shopHeader} ${styles.allItemsHeader}`}>
        <div className="heading">
          <img src={shopSVG} alt="Shop" />
          <h1>All Categories</h1>
        </div>
      </div>
      <SearchBar />
      <p className={styles.itemShow}>
        Showing <span>{data.length}</span> out of {data.length}
      </p>
      <div className={styles.itemsGrid}>
        {data &&
          data.map((product) => (
            <ItemCard key={product.id} product={product} link={`/shop/${product.id}`}/>
          ))}
      </div>
    </div>
  );
};

export default ShopPage;
