import { useEffect, useState, useRef } from "react";
import shopSVG from "../../../assets/savvy-shop.svg";
import * as styles from "../Shop.css";
import { Helmet } from "react-helmet";
import productService from "../../../services/productService";
import ItemCard from "../../../components/common/ItemCard";
import SearchBar from "../../../components/features/SearchBar";
const WomansPage = () => {
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
      const res = await productService.getItemByCategory('womens');
      const data = await res.data;
      setData(data);
      console.log(data)
    } catch (err) {
      setError(true);
    }
  }
  return (
    <div>
      <Helmet>
        <title>Shop Womens | Savvy WebStore</title>
      </Helmet>
      <div className={`${styles.shopHeader} ${styles.womensHeader}`}>
        <div className="heading">
          <img src={shopSVG} alt="Shop" />
          <h1>Womens</h1>
        </div>
      </div>
      <SearchBar />
      <p className={styles.itemShow}>
        Showing <span>#</span> out of #{" "}
      </p>
      <div className={styles.itemsGrid}></div>
    </div>
  );
};

export default WomansPage;
