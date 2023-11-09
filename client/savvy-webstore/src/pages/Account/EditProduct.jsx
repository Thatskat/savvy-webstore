import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'

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
      fetchProducts();
    } catch (err) {
      console.error(err?.response);
      setError(true);
    }
  };

  if (error) {
    return <p className="error">Error - An unexpected error has occurred</p>;
  }

  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }
  return (
    <div className={styles.overview}>
      <Helmet>
        <title>Product Overview | Savvy WebStore</title>
      </Helmet>
      <h1>Product Overview</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi veritatis
        architecto labore? Porro maiores iure assumenda ea obcaecati atque eos,
        neque quos aspernatur totam ipsa ab odio veritatis reiciendis harum nisi
        quibusdam earum dolorem culpa fugiat quisquam doloremque quas quod.
      </p>
      <div className={styles.itemsGrid}>
        {data &&
          data.map((product) => (
            <div key={product.id} className={styles.card}>
              <img src={product.image} />
              <h2>{product.itemName}</h2>
              <button onClick={() => handleDelete(product.id)} className="btn">
                Delete
              </button>
              <Link to={`/account/products/edit/${product.id}`} className="btn">
                Edit
              </Link>
            </div>
          )) || <Skeleton />}
      </div>
    </div>
  );
};

export default EditProduct;
