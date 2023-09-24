import { Link } from "react-router-dom";
import logo from "../../../assets/logos/savvy-top-logo.svg";

import { useState } from "react";
import Modal from "react-modal";

import { BsBag, BsHeart, BsPerson, BsTextLeft, BsSearch } from "react-icons/bs";

import { AiOutlineClose } from "react-icons/ai";

import * as styles from "./Header.css";
const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [signUpModalIsOpen, signUpSetIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    signUpSetIsOpen(false);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openSignUpModal() {
    setIsOpen(false);
    signUpSetIsOpen(true);
  }

  function closeSignUpModal() {
    signUpSetIsOpen(false);
  }
  return (
    <header className={styles.header}>
      {/* LOGIN WITH USERNAME MODAL */}
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Login Modal"
        shouldCloseOnOverlayClick={true}
      >
        <button onClick={closeModal}>
          <AiOutlineClose />
        </button>
        <h2>Login</h2>
        <button onClick={openSignUpModal}>Login with you email?</button>
        <form>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
        <a>I&apos;ve lost my password</a>
        <p>Don&apos;t have an account? <button onClick={openSignUpModal}>Sign up here</button></p>
      </Modal>
          {/* LOGIN WITH USERNAME MODAL */}
          <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Login Modal"
        shouldCloseOnOverlayClick={true}
      >
        <button onClick={closeModal}>
          <AiOutlineClose />
        </button>
        <h2>Login</h2>
        <button onClick={openSignUpModal}>Login with you email?</button>
        <form>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
        <a>I&apos;ve lost my password</a>
        <p>Don&apos;t have an account? <button onClick={openSignUpModal}>Sign up here</button></p>
      </Modal>
      {/* SIGN UP MODAL */}
      <Modal
        isOpen={signUpModalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeSignUpModal}
        contentLabel="Login Modal"
        shouldCloseOnOverlayClick={true}
      >
        <button onClick={closeSignUpModal}>
          <AiOutlineClose />
        </button>
        <h2>Login</h2>
        <button>Login with you email?</button>
        Hello!
      </Modal>
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
            placeholder="Search our products"
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
              <button onClick={openModal}>
                <BsPerson /> Login/Signup
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.bottomHeader}>
        <nav>
          <ul>
            <li className="textHighlight">
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
