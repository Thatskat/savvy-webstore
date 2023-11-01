import { useState } from "react";
import Modal from "react-modal";
import { Link, useNavigate } from "react-router-dom";

import authorizationServices from "../../../services/authorizationService";
import useAuth from "../../../hooks/useAuth";

import * as styles from "../ModalStyles.css";
import { AiOutlineClose } from "react-icons/ai";

const UsernameModal = ({
  modalIsOpen,
  closeModal,
  openEmailModal,
  openSignUpModal,
}) => {
  const { loginSaveUser } = useAuth();
  const navigate = useNavigate();
  
  return (
    <Modal
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      contentLabel="Login with Username Modal"
      className={styles.modal}
    >
      <button onClick={closeModal} className="closeButton">
        <AiOutlineClose />
      </button>
      <h2>Login</h2>
      <button onClick={openEmailModal} className="subTextButton">
        Login with your email?
      </button>
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
      <a className="subTextButton">I&apos;ve lost my password</a>
      <p className="noAccount">
        Don&apos;t have an account?{" "}
        <button onClick={openSignUpModal}>Sign up here</button>
      </p>
    </Modal>
  );
};

export default UsernameModal;
