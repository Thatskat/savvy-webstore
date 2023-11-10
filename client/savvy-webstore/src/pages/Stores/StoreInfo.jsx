import { Link, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import storeService from "../../services/storeService";

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
  return (
    <div>StroreInfo</div>
  )
}

export default StoreInfo