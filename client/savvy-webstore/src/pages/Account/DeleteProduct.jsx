import { useEffect, useState, useRef, useCallback } from "react";
import { Helmet } from "react-helmet";

import useAuth from "../../hooks/useAuth";
import productService from "../../services/productService";

import * as styles from "./EditProduct.css";

const DeleteProduct = () => {
  const { user } = useAuth();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const hasRun = useRef(false);

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
      setData((productOnMount) => [...productOnMount, ...data]);

      console.log(data);
    } catch (err) {
      setError(true);
      console.error(err?.response);
    }
  }

  if (error) {
    return <p>error</p>;
  }

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div className={styles.overview}>
      <Helmet>
        <title>Delete Products | Savvy WebStore</title>
      </Helmet>
      <h1>Delete Products</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt rem
        fugiat repellat aperiam excepturi, quod minus eos nam sit? Iste?
      </p>
      {data ? (
        data.map((product) => (
          <div key={product.id}>
            <h2>{product.itemName}</h2>
            <button onClick={() => handleDelete(product.id)}>
              Delete Item
            </button>
          </div>
        ))
      ) : (
        <p>No data</p>
      )}
    </div>
  );
};

export default DeleteProduct;
