import { Helmet } from "react-helmet";
import * as styles from "./Stores.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import storeService from "../../services/storeService";

const StoresPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const hasRun = useRef(false);
  useEffect(() => {
    window.scroll(0, 0);
    if (hasRun.current === false) {
      fetchStores();
      setLoading(false);
      return () => {
        hasRun.current = true;
      };
    }
  }, []);

  async function fetchStores() {
    try {
      const res = await storeService.getAll();
      const data = await res.data;
      setData(data);
    } catch (err) {
      setError(true);
      console.error(err?.response);
    }
  }

  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }

  if (error) {
    return <h1 className="loading">Error</h1>;
  }
  return (
    <div className={styles.stores}>
      <Helmet>
        <title>Stores | Savvy WebStore</title>
      </Helmet>
      <h1>Find a store near you</h1>
      <form>
        <label htmlFor="searchStore">Search for a store</label>
        <input
          type="text"
          name="searchStore"
          id="searchStore"
          placeholder="Enter an address or suburb"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>

      <div className="browseByRegion">
        <h2>Browse by region</h2>
        <div className="stateButton">
          <button>All</button>
          <button>ACT</button>
          <button>NSW</button>
          <button>NT</button>
          <button>QLD</button>
          <button>SA</button>
          <button>TAS</button>
          <button>VIC</button>
          <button>WA</button>
        </div>
        <div className="byAlphabet">
          <button>All</button>
          <button>A</button>
          <button>B</button>
          <button>C</button>
          <button>D</button>
          <button>E</button>
          <button>F</button>
          <button>G</button>
          <button>H</button>
          <button>I</button>
          <button>J</button>
          <button>K</button>
          <button>L</button>
          <button>M</button>
          <button>N</button>
          <button>O</button>
          <button>P</button>
          <button>Q</button>
          <button>R</button>
          <button>S</button>
          <button>T</button>
          <button>U</button>
          <button>V</button>
          <button>W</button>
          <button>X</button>
          <button>Y</button>
          <button>Z</button>
        </div>
        <div className="cardGrid">
          {data &&
            data.map((store) => (
              <div className={styles.card} key={store.id}>
                <h3>{store.storeName}</h3>
                <p><span>Address:</span> {store.address}</p>
                <p>
                  <span>Phone: </span> {store.phoneNumber}
                </p>
                <Link to={store.storeName}>
                  <button className="btn">View Store</button>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default StoresPage;
