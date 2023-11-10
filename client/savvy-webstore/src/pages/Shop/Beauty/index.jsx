import { useEffect, useState, useRef } from "react";
import shopSVG from "../../../assets/savvy-shop.svg";
import * as styles from "../Shop.css";
import { Helmet } from "react-helmet";
import SearchBar from "../../../components/features/SearchBar";
import productService from "../../../services/productService";
import ItemCard from "../../../components/common/ItemCard";
import { Link } from "react-router-dom";

const BeautyPage = () => {
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
      const res = await productService.getItemByCategory("Health&Beauty");
      const data = await res.data;
      setData(data);
      console.log(data);
    } catch (err) {
      setError(true);
      console.error(err?.response);
    }
  }
  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }
  return (
    <div>
      <Helmet>
        <title>Shop Beauty | Savvy WebStore</title>
      </Helmet>
      <div className={`${styles.shopHeader} ${styles.beautyHeader}`}>
        <div className="heading">
          <img src={shopSVG} alt="Shop" />
          <h1>Health & Beauty</h1>
        </div>
      </div>
      <SearchBar />
      <p className={styles.itemShow}>
        Showing <span>{data.length}</span> out of {data.length}
      </p>
      <div className={styles.itemsGrid}>
        {data &&
          data.map((product) => (
            <ItemCard
              key={product.id}
              product={product}
              link={`/shop/${product.id}`}
            />
          ))}
        {data.length === 0 && (
          <p>
            Looks like there&apos;s no items in this category. Return to{" "}
            <Link to="/shop">All Categories</Link>.
          </p>
        )}
      </div>
    </div>
  );
};

export default BeautyPage;
