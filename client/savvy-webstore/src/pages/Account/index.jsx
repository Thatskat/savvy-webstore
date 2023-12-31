import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import useAuth from "../../hooks/useAuth";

import * as styles from "./Account.css";

const Account = () => {
  const { user, logout } = useAuth();
  return (
    <div className={styles.account}>
      <Helmet>
        <title>{`${user?.firstName}'s Account | Savvy WebStore`}</title>
      </Helmet>
      <div className={styles.grid}>
        <div className="userInfo">
          <h1>My Account</h1>
          <p>Welcome back, {user?.firstName}!</p>
          <button onClick={logout} className="btn-small">Logout?</button>
          <p className="mt-3">What are you looking for today?</p>
        </div>
        <div className="adminBtn">
          <h2>Dashboard</h2>
          <p>Manage your Savvy Webstore account here:</p>
          {user?.isAdmin === true ? (
            <Link to="/account/products/overview" className="btn">
              Product Overview
            </Link>
          ) : null}
          {user?.isAdmin === true ? (
            <Link to="/account/products/add" className="btn">
              Add Product
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Account;
