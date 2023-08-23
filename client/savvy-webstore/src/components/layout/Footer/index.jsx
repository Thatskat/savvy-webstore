import * as styles from "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/logos/savvy-footer-heading.svg";

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
                className="instagram"
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
                className="facebook"
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
                className="twitter"
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
        <img src={logo} alt="Our Promise" />
        <p>
          At Savvy, we&apos;re redefining the way you shop for secondhand
          treasures. Our online store is a haven for fashion-forward individuals
          who embrace both style and sustainability. Unearth unique pieces that
          tell stories of the past while making a positive impact on the future.
        </p>
        <h5>Savvy WebStore &copy; {year}</h5>
      </div>
    </footer>
  );
};

export default Footer;
