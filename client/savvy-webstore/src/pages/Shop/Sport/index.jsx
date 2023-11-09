import shopSVG from "../../../assets/savvy-shop.svg";
import * as styles from "../Shop.css";
import { Helmet } from "react-helmet";
import SearchBar from "../../../components/features/SearchBar";

const SportPage = () => {
  return (
    <div>
      <Helmet>
        <title>Shop Sport | Savvy WebStore</title>
      </Helmet>
      <div className={`${styles.shopHeader} ${styles.sportsHeader}`}>
        <div className="heading">
          <img src={shopSVG} alt="Shop" />
          <h1>Sports</h1>
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

export default SportPage;
