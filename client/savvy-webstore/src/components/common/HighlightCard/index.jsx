import { Link } from "react-router-dom";

const HighlightCard = ({ link, title, image }) => {
  return (
    <Link to={link}>
      <img src={image} alt={title} />
      <h4>{title}</h4>
    </Link>
  );
};

export default HighlightCard;
