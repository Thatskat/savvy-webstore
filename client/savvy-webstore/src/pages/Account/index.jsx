import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import useAuth from "../../hooks/useAuth";

const Account = () => {
  const { user } = useAuth();
  return (
    <div>
      <Helmet>
        <title>{`${user.firstName}'s Account | Savvy WebStore`}</title>
      </Helmet>
      <p>{user.firstName}</p>
      <Link to="/account/add">Add Product</Link>
      <Link to="/account/edit">Edit Product</Link>
    </div>
  );
};

export default Account;
