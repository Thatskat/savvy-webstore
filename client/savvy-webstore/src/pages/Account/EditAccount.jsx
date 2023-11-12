import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import authorizationService from "../../services/authorizationService";
import { useState, useRef, useEffect } from "react";

const EditAccount = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    id: user?.id,
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
    username: user?.username,
    iaAdmin: user?.isAdmin,
    password: user?.password,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { id, firstName, lastName, email, username, isAdmin, password } =
    userDetails;

  const hasRun = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (hasRun.current === false) {
      setLoading(false);
      console.log(password)

      return () => {
        hasRun.current = true;
      };
    }
  }, []);

  const handleTextChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await authorizationService.editUser(id, userDetails);
      console.log(res);
      navigate("/account");
    } catch (err) {
      console.error(err?.response);
      setTimeout(() => setLoading(false), 500);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Edit Account | Savvy WebStore</title>
      </Helmet>
      <Link to={`/account`}>Back to Account Page</Link>
      <h1>Edit Account</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, cumque?
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter First Name"
          onChange={handleTextChange}
          value={firstName}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Enter Last Name"
          onChange={handleTextChange}
          value={lastName}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleTextChange}
          value={email}
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter Username"
          onChange={handleTextChange}
          value={username}
        />
        <button type="submit" onClick={() => console.log(userDetails)}>Edit</button>
      </form>
    </div>
  );
};

export default EditAccount;
