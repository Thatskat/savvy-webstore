import shopSVG from "../../../assets/savvy-shop.svg";
import * as styles from "../Shop.css";
import { Helmet } from "react-helmet";
import SearchBar from "../../../components/features/SearchBar";

const HomewaresPage = () => {
  return (
    <div>
      <Helmet>
        <title>Shop Homewares | Savvy WebStore</title>
      </Helmet>
      <div className={`${styles.shopHeader} ${styles.homewaresHeader}`}>
        <div className="heading">
          <img src={shopSVG} alt="Shop" />
          <h1>Homewares</h1>
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

export default HomewaresPage;