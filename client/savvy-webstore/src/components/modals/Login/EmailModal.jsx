import Modal from "react-modal";
import * as styles from "../ModalStyles.css"
import { AiOutlineClose } from "react-icons/ai";

const EmailModal = ({
  closeModal,
  openModal,
  openSignUpModal,
  closeEmailModal,
  emailModalIsOpen,
}) => {
  return (
    <Modal
      isOpen={emailModalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeEmailModal}
      contentLabel="Login with Email Modal"
      className={styles.modal}
    >
      <button onClick={closeModal} className="closeButton">
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
      <p>
        Don&apos;t have an account?{" "}
        <button onClick={openSignUpModal}>Sign up here</button>
      </p>
    </Modal>
  );
};

export default EmailModal;
