import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import productService from "../../services/productService";

import * as styles from "./EditProduct.css";

const EditProduct = () => {
  const { user } = useAuth();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const hasRun = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (hasRun.current === false) {
      fetchProducts();
      setLoading(false);
      return () => {
        hasRun.current = true;
      };
    }
  }, [data]);

  async function fetchProducts() {
    try {
      const res = await productService.getAll();
      const data = await res.data;
      setData(data);
      console.log(data);
    } catch (err) {
      setError(true);
      console.error(err?.response);
    }
  }

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      const res = await productService.deleteProduct(id);
      setLoading(false);
    } catch (err) {
      console.error(err?.response);
      setError(true);
    }
  };

  if (error) {
    return <p>error</p>;
  }

  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <div>
      <Helmet>
        <title>Product Overview | Savvy WebStore</title>
      </Helmet>
      <h1>Edit Products</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, culpa!
      </p>
      <div className={styles.itemsGrid}>
        {data &&
          data.map((product) => (
            <div key={product.id}>
              <p>{product.itemName}</p>
              <button onClick={() => handleDelete(product.id)}>delete</button>
              <Link to={`/account/products/edit/${product.id}`}>Edit</Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default EditProduct;
