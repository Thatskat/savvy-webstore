import { Helmet } from "react-helmet";
import * as styles from "./Stores.css";
import {Link} from "react-router-dom"
const StoresPage = () => {
  return (
    <div className={styles.stores}>
      <Helmet>
        <title>Stores | Savvy WebStore</title>
      </Helmet>
      <h1>Find a store near you</h1>
      <form>
      <label htmlFor="searchStore">Search for a store</label>
      <input type="text" name="searchStore" id="searchStore" placeholder="Enter an address or suburb" />
      <button type="submit">Search</button>
      </form>

      <div className={styles.storeOfferings}>
        <div>
          <h3>What our stores </h3>
        </div>
      </div>
      
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
      <div className={styles.card}>
        <h3>Moorabbin</h3>
        <p>Address</p>
        <p><span>Phone: </span>(03) 9372 9172</p>
        <Link to="moorabbin"><button>View Store</button></Link>
      </div>
        </div>
      </div>
    </div>
  );
};

export default StoresPage;
