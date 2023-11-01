import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";

import useAuth from "../../hooks/useAuth";
import productService from "../../services/productService";

import ItemCard from "../../components/common/ItemCard";
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
  }, []);

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

  if (error) {
    return <p>error</p>;
  }

  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <div>
      <Helmet>
        <title>Edit Products | Savvy WebStore</title>
      </Helmet>
      <h1>Edit Products</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, culpa!
      </p>
      <div className={styles.itemsGrid}>
        {data &&
          data.map((product) => (
            <ItemCard
              key={product.id}
              product={product}
              link={`/account/edit/${product.id}`}
            />
          ))}
      </div>
    </div>
  );
};

export default EditProduct;
