import { useState } from "react";
import Modal from "react-modal";
import { Link, useNavigate } from "react-router-dom";

import authorizationServices from "../../../services/authorizationService";
import useAuth from "../../../hooks/useAuth";

import * as styles from "../ModalStyles.css";
import { AiOutlineClose } from "react-icons/ai";

const EmailModal = ({
  openSignUpModal,
  closeEmailModal,
  emailModalIsOpen,
  openModal,
}) => {
  const { loginSaveUser } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { email, password } = user;

  const handleTextChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await authorizationServices.loginUser(user);
      console.log(res.data.token);
      loginSaveUser(res.data)
      navigate("/");
    } catch (err) {
      console.error(err?.response);
      setTimeout(() => setLoading(false), 500);
    }
  };
  return (
    <Modal
      isOpen={emailModalIsOpen}
      onRequestClose={closeEmailModal}
      contentLabel="Login with Email Modal"
      className={styles.modal}
    >
      <button onClick={closeEmailModal} className="closeButton">
        <AiOutlineClose />
      </button>
      <h2>Login</h2>
      <button onClick={openModal} className="subTextButton">
        Login with your username?
      </button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={handleTextChange}
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={handleTextChange}
          value={password}
        />
        <button type="submit" className="btn-small">Login</button>
      </form>
      <a className="subTextButton">I&apos;ve lost my password</a>
      <p className="noAccount">
        Don&apos;t have an account?{" "}
        <button onClick={openSignUpModal} className="bold">Sign up here</button>
      </p>
    </Modal>
  );
};

export default EmailModal;
