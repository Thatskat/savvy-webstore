import Modal from "react-modal";
import * as styles from "../ModalStyles.css";
import { AiOutlineClose } from "react-icons/ai";

import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import authorizationServices from "../../../services/authorizationService";


const SignUpModal = ({ signUpModalIsOpen, closeSignUpModal, openModal }) => {
  return (
    <Modal
      isOpen={signUpModalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeSignUpModal}
      contentLabel="Sign Up Modal"
      className={styles.modal}
    >
      <button onClick={closeSignUpModal} className="closeButton">
        <AiOutlineClose />
      </button>
      <h2>Sign Up</h2>
      <form>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
        />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Email" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
        <button type="submit">Sign Up</button>
      </form>
      <button onClick={openModal} className="subTextButton">
        Sign in if you already have an account
      </button>
    </Modal>
  );
};

export default SignUpModal;
