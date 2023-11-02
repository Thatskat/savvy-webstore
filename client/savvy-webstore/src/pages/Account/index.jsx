import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import useAuth from "../../hooks/useAuth";

import * as styles from "./Account.css";

const Account = () => {
  const { user } = useAuth();
  return (
    <div className={styles.account}>
      <Helmet>
        <title>{`${user?.firstName}'s Account | Savvy WebStore`}</title>
      </Helmet>
      <div className={styles.grid}>
        <div className="userInfo">
          <h1>My Account</h1>
          <p>Welcome back, {user?.firstName}!</p>
        </div>
        <div className="adminBtn">
          {user?.isAdmin === true ? (
            <Link to="/account/add" className="btn">
              Add Product
            </Link>
          ) : null}
          {user?.isAdmin === true ? (
            <Link to="/account/edit" className="btn">
              Edit Product
            </Link>
          ) : null}
          {user?.isAdmin === true ? (
            <Link to="/account/delete" className="btn">
              Delete Product
            </Link>
          ) : null}
          {user && <Link to="/account/edit-account" className="btn">
              Edit Account
            </Link>}
        </div>
      </div>
    </div>
  );
};

export default Account;
