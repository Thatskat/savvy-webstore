import { Link } from "react-router-dom";
import * as styles from "./Button.css";

const Button = ({ link, title }) => {
  return (
    <Link to={link}>
      <button className={styles.button}>{title}</button>
    </Link>
  );
};

export default Button;
