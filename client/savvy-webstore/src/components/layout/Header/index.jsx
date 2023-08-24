import { Link } from "react-router-dom";
import logo from "../../../assets/logos/savvy-top-logo.svg";

import { BsBag, BsHeart, BsPerson, BsTextLeft, BsSearch } from "react-icons/bs";

import * as styles from "./Header.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topHeader}>
        <div className={styles.searchBar}>
          <label htmlFor="searchItems">Search Items</label>
          <div className={styles.searchIcon}>
            <BsSearch />
          </div>
          <input
            type="text"
            id="gsearch"
            name="searchItems"
            aria-label="Search Items"
          />
        </div>
        <div className={styles.siteLogo}>
          <Link to="/">
            <img src={logo} alt="Savvy Webstore" />
          </Link>
        </div>
        <nav className={styles.accountLinks}>
          <ul>
            <li>
              <Link to="/wishlist" title="Wishlist">
                <BsHeart />
              </Link>
            </li>
            <li>
              <Link to="/cart" title="Cart">
                <BsBag />
              </Link>
            </li>
            <li>
              <Link to="/login">
                <BsPerson /> Login/Signup
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.bottomHeader}>
        <nav>
          <ul>
            <li>
              <Link to="/shop">
                <BsTextLeft />
                Shop Online
              </Link>
            </li>
            <li>
              <Link to="/shop/womens">Womens</Link>
            </li>
            <li>
              <Link to="/shop/mens">Mens</Link>
            </li>
            <li>
              <Link to="/shop/kids">Kids</Link>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <Link to="/stores">Find a Store</Link>
            </li>
            <li>
              <Link to="/shop/mens">Mens</Link>
            </li>
            <li>
              <Link to="/shop/kids">Kids</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
