import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useRef, useState } from "react";
import storeService from "../../services/storeService";

import * as styles from "./StoreInfo.css"

const StoreInfo = () => {
  const { name } = useParams();
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
      const res = await storeService.getStoreByName(name);
      const data = await res.data;
      setData(data);
      console.log(data);
    } catch (err) {
      setError(true);
      console.error(err?.response);
    }
  }
  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }
  if(error){
    return <h1 className="loading">Error</h1>
  }
  return (
    <div className={styles.info}>
      <Helmet>
        <title>{`${data[0]?.storeName} Store | Savvy WebStore`}</title>
      </Helmet>
      <h1>{data[0]?.storeName} Store</h1>
    <div className={styles.grid}>
    <p>{data[0]?.storeDescription}</p>
    <div className="contactInfo">
      <p><span>Store Address:</span> {data[0]?.address}</p>
      <p><span>Store Phone:</span> {data[0]?.phoneNumber}</p>
    </div>
    </div>
      
    </div>
  );
};

export default StoreInfo;
