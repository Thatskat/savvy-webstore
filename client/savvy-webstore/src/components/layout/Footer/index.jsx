import * as styles from "./Footer.css";
import { Link } from "react-router-dom";

import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = () => {
  // DYNAMIC YEAR IN FOOTER
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.topFooter}>
        <div className={styles.socialMedia}>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                title="Instagram"
              >
                <BsInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                title="Facebook"
              >
                <BsFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                title="Twitter"
              >
                <BsTwitter />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Important Links</h5>
          <ul>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5>The Store</h5>
          <ul>
            <li>
              <Link to="/shop">Our Items</Link>
            </li>
            <li>
              <Link to="/stores">Find a Store</Link>
            </li>
            <li>
              <Link to="/returns">Returns & Exchanges</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5>The WebStore</h5>
          <ul>
            <li>
              <Link to="/shipping">Shipment</Link>
            </li>
            <li>
              <Link to="/returns">Returns</Link>
            </li>
            <li>
              <Link to="/terms">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
      <div className={styles.bottomFooter}>
        <h5>Savvy WebStore &copy; {year}</h5>
      </div>
    </footer>
  );
};

export default Footer;
