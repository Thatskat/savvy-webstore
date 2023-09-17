import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import * as styles from "./ItemCard.css";

const ItemCard = ({ title, image, price, location, id }) => {
  return (
    <Link className={styles.itemCard} title={title} to={`/shop/${id}`}>
      <img src={image} alt={title} />
      <div className="cardTextContent">
        <p className="location">{location}</p>
        <h2>{title}</h2>
        <div className="inline">
          <p className="price">${price}</p>
          <button className="wishlistHeart">
            <AiOutlineHeart />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
