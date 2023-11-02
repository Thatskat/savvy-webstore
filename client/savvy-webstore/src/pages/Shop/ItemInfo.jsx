import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import productService from "../../services/productService";
import { priceFormatter } from "../../utilities/read";

import * as styles from "./ItemInfo.css";
import { BsBag, BsHeart, BsTruck } from "react-icons/bs";
const ItemInfo = () => {
  const { user } = useAuth();
  const params = useParams();

  const [product, setProduct] = useState({
    id: params.id,
    brand: "",
    colour: "",
    condition: "",
    description: "",
    isAvailable: true,
    itemName: "",
    material: "",
    onSale: false,
    price: "",
    size: "",
    sku: "",
    storeLocation: "",
    itemType: "",
    image: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const {
    id,
    brand,
    colour,
    condition,
    description,
    isAvailable,
    itemName,
    material,
    onSale,
    price,
    size,
    sku,
    storeLocation,
    itemType,
    image,
  } = product;

  const hasRun = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (hasRun.current === false) {
      fetchProduct();
      setLoading(false);

      return () => {
        hasRun.current = true;
      };
    }
  }, [id]);

  async function fetchProduct() {
    try {
      const res = await productService.getById(id);
      const data = await res.data;
      setProduct((productsOnMount) => ({ ...productsOnMount, ...data }));
      console.log(data);
    } catch (err) {
      setError(true);
      console.error(err?.response);
    }
  }
  return (
    <div className={styles.info}>
      <Helmet>
        <title>{`${itemName} | Savvy WebStore`}</title>
      </Helmet>
      <Link to="/">Back to All Products</Link>
      <div className="mainGrid">
        <div>
          <img src={image} alt={`${itemName}`} />
        </div>
        <div className="itemDetails">
          <Link to="/stores/location">{storeLocation}</Link>
          <h1>{itemName}</h1>
          <p className="sku">SKU: {sku}</p>
          <p className="description">{description}</p>
          <h2 className="price">{priceFormatter(price)}</h2>
          <div>
            <button>
              Add to cart <BsBag />
            </button>
            <button>
              <BsHeart />
            </button>
          </div>
          <h4>Delivery options</h4>
          <div className="deliveryOptions">
            <BsTruck  className={styles.svgColour}/>
            <div>
              <p>AusPost Parcel</p>
              <p>From $7.00</p>
            </div>
          </div>
          <div className="productOverview">
            <div>
              <h3>Condition</h3>
              <p>{condition}</p>
            </div>
            <div>
              <h3>Size</h3>
              <p>{size}</p>
            </div>
            <div>
              <h3>Brand</h3>
              <p>{brand}</p>
            </div>
            <div>
              <h3>Material</h3>
              <p>{material}</p>
            </div>
            <div>
              <h3>Colour</h3>
              <p>{colour}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
