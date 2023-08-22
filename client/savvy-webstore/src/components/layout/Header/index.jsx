import { Link } from "react-router-dom";

import { BsBag, BsHeart, BsPerson, BsTextLeft } from "react-icons/bs";

import * as styles from "./index.css";
const Header = () => {
  return (
    <header >
      <div>
        <div>
          <label htmlFor="searchItems">Search Items</label>
          <input type="text" id="gsearch" name="searchItems" />
        </div>
        <div>
          <Link to="/">Hello</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/wishlist">
                <BsHeart />
              </Link>
            </li>
            <li>
              <Link to="/cart">
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
      <div>
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
