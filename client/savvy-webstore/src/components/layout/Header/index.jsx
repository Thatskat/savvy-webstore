import { Link } from "react-router-dom";
import logo from "../../../assets/logos/savvy-top-logo.svg";

import { useState } from "react";
import useAuth from "../../../hooks/useAuth";

import { BsBag, BsHeart, BsPerson, BsTextLeft, BsSearch } from "react-icons/bs";

// IMPORT MODALS
import EmailModal from "../../modals/Login/EmailModal";
import UsernameModal from "../../modals/Login/UsernameModal";
import SignUpModal from "../../modals/SignUp";

import * as styles from "./Header.css";
const Header = () => {
  const { user, logout } = useAuth();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [signUpModalIsOpen, signUpSetIsOpen] = useState(false);
  const [emailModalIsOpen, emailSetIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    signUpSetIsOpen(false);
    emailSetIsOpen(false);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openSignUpModal() {
    setIsOpen(false);
    signUpSetIsOpen(true);
    emailSetIsOpen(false);
  }

  function closeSignUpModal() {
    signUpSetIsOpen(false);
  }

  function openEmailModal() {
    setIsOpen(false);
    signUpSetIsOpen(false);
    emailSetIsOpen(true);
  }

  function closeEmailModal() {
    emailSetIsOpen(false);
  }
  return (
    <header className={styles.header}>
      {/* LOGIN WITH USERNAME MODAL */}
      <UsernameModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        openEmailModal={openEmailModal}
        openSignUpModal={openSignUpModal}
      />
      <EmailModal
        openModal={openModal}
        openSignUpModal={openSignUpModal}
        closeEmailModal={closeEmailModal}
        emailModalIsOpen={emailModalIsOpen}
      />
      {/* SIGN UP MODAL */}
      <SignUpModal
        signUpModalIsOpen={signUpModalIsOpen}
        closeSignUpModal={closeSignUpModal}
        openModal={openModal}
      />
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
              {!user && (
                <button onClick={openModal}>
                  <BsPerson /> Login/Signup
                </button>
              )}
              {user && <button onClick={logout}>Logout</button>}
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.bottomHeader}>
        <nav>
          <ul>
            <li className="textHighlight">
              <Link to="/shop">
                {/* <BsTextLeft /> */}
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
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
