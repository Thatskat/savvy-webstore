import Modal from "react-modal";

import { AiOutlineClose } from "react-icons/ai";

const UsernameModal = ({
  modalIsOpen,
  closeModal,
  openEmailModal,
  openSignUpModal,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      contentLabel="Login with Username Modal"
    >
      <button onClick={closeModal}>
        <AiOutlineClose />
      </button>
      <h2>Login</h2>
      <button onClick={openEmailModal}>Login with your email?</button>
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
      <p>
        Don&apos;t have an account?{" "}
        <button onClick={openSignUpModal}>Sign up here</button>
      </p>
    </Modal>
  );
};

export default UsernameModal;
