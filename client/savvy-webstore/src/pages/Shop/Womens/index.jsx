import shopSVG from "../../../assets/savvy-shop.svg";
import * as styles from "../Shop.css";
import { Helmet } from "react-helmet";
import ItemCard from "../../../components/common/ItemCard";
import SearchBar from "../../../components/features/SearchBar";
const WomansPage = () => {
  return (
    <div>
      <Helmet>
        <title>Shop Womens | Savvy WebStore</title>
      </Helmet>
      <div className={styles.shopHeader}>
        <div className="heading">
          <img src={shopSVG} alt="Shop" />
          <h1>Womens</h1>
        </div>
      </div>
      <SearchBar />
      <p className={styles.itemShow}>
        Showing <span>#</span> out of #{" "}
      </p>
      <div className={styles.itemsGrid}>
 
      </div>
    </div>
  );
};

export default WomansPage;
