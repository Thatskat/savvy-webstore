import shopSVG from "../../../assets/savvy-shop.svg";
import * as styles from "../Shop.css";
import { Helmet } from "react-helmet";
import ItemCard from "../../../components/common/ItemCard";
import SearchBar from "../../../components/features/SearchBar";
const MensPage = () => {
  return (
    <div>
      <Helmet>
        <title>Shop Mens | Savvy WebStore</title>
      </Helmet>
      <div className={`${styles.shopHeader} ${styles.mensHeader}`}>
        <div className="heading">
          <img src={shopSVG} alt="Shop" />
          <h1>Mens</h1>
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

export default MensPage;