import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import * as styles from "./ItemCard.css";

const ItemCard = ({ product, link }) => {
  return (
    <div className={styles.itemCard} title={product.itemName} to={`/shop/${product.id}`}>
      <img src={product.image} alt={product.itemName} />
      <div className="cardTextContent">
        <p className="location">{product.storeLocation}</p>
        <Link to={link}><h2>{product.itemName}</h2></Link>
        <div className="inline">
          <p className="price">${product.price}</p>
          <button className="wishlistHeart">
            <AiOutlineHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
