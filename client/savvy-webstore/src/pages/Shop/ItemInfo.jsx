import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import * as styles from "./ItemInfo.css";
import placeholder from "../../assets/staff-placeholder.jpg";
import { BsBag, BsHeart } from "react-icons/bs";
const ItemInfo = () => {
  return (
    <div className={styles.info}>
      <Helmet>
        <title>Item Name | Savvy WebStore</title>
      </Helmet>
      <div className="mainGrid">
        <div>
          <img src={placeholder} />
        </div>
        <div className="itemDetails">
          <Link to="/stores/location">Store location</Link>
          <h1>Product Name</h1>
          <p className="sku">SKU:</p>
          <p>item description</p>
          <h2 className="price">Price</h2>
          <div>
            <button>Add to cart <BsBag /></button>
            <button><BsHeart /></button>
          </div>
          <h4>Delivery options</h4>
          <h3>Condition</h3>
          <h3>Brands</h3>
          <h3>Colour</h3>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
