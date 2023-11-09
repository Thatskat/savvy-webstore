import { Helmet } from "react-helmet";
import * as styles from "./Wishlist.css"
const WishlistPage = () => {
  return (
    <div className={styles.wishlist}>
      <Helmet><title>Wishlist | Savvy WebStore</title></Helmet>
      <h1>Wishlist</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, atque.</p>
      <div className="itemList">
          <div className="card">
            <h2>Item Name</h2>
          </div>
      </div>
    </div>
  );
};

export default WishlistPage;
