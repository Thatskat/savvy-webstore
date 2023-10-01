import Modal from "react-modal";
import * as styles from "../ModalStyles.css"
import { AiOutlineClose } from "react-icons/ai";

const EmailModal = ({
  openSignUpModal,
  closeEmailModal,
  emailModalIsOpen,
  openModal,
}) => {
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
      <button onClick={openModal} className="subTextButton">Login with your username?</button>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Email" />
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

export default EmailModal;
