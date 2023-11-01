import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import productService from "../../services/productService";

import * as styles from "./ItemInfo.css";
import placeholder from "../../assets/staff-placeholder.jpg";
import { BsBag, BsHeart } from "react-icons/bs";
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
          <img src={image} alt={`${itemName}`}/>
        </div>
        <div className="itemDetails">
          <Link to="/stores/location">{storeLocation}</Link>
          <h1>{itemName}</h1>
          <p className="sku">SKU: {sku}</p>
          <p>{description}</p>
          <h2 className="price">{price}</h2>
          <div>
            <button>
              Add to cart <BsBag />
            </button>
            <button>
              <BsHeart />
            </button>
          </div>
          <h4>Delivery options</h4>
          <h3>Condition</h3>
          <p>{condition}</p>
          <h3>Size</h3>
          <p>{size}</p>
          <h3>Brands</h3>
          <p>{brand}</p>
          <h3>Material</h3>
          <p>{material}</p>
          <h3>Colour</h3>
          <p>{colour}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
