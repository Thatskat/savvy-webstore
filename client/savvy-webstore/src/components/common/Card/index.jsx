import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import * as styles from "./Card.css";

const Card = ({ link, title, image }) => {
  return (
    <Link to={link} className={styles.card}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <div className="arrowButton">
        <AiOutlineArrowRight />
      </div>
    </Link>
  );
};

export default Card;
