import shopSVG from "../../assets/savvy-shop.svg";
import * as styles from "./Shop.css";
import ItemCard from "../../components/common/ItemCard";

import { BsShuffle } from "react-icons/bs";

const ShopPage = () => {
  return (
    <div>
      <div className={styles.shopHeader}>
        <div className="heading">
          <img src={shopSVG} alt="Shop" />
          <h1>All categories</h1>
        </div>
      </div>
      <div className={styles.optionsBar}>
        <div className="selectionOverview">
          <button>Category</button>
          <button>Price</button>
          <button>Condition</button>
          <button>Brand</button>
          <button>Size</button>
          <button>Colour</button>
          <button>Material</button>
          <button>Location</button>
        </div>
        <div>
          <button>
            <BsShuffle />
            Stock Shuffle
          </button>
        </div>
      </div>
      <p>Showing # out of # </p>
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
