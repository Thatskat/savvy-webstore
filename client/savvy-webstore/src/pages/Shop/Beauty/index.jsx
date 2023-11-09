import shopSVG from "../../../assets/savvy-shop.svg";
import * as styles from "../Shop.css";
import { Helmet } from "react-helmet";
import SearchBar from "../../../components/features/SearchBar";

const BeautyPage = () => {
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
        Showing <span>#</span> out of #{" "}
      </p>
      <div className={styles.itemsGrid}></div>
    </div>
  );
};

export default BeautyPage;
