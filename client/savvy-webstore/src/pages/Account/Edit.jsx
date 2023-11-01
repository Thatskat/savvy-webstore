import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import productService from "../../services/productService";

const Edit = () => {
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
    <div>
      <Helmet>
        <title>{`Edit ${itemName} | Savvy WebStore`}</title>
      </Helmet>
      <h1>Edit {itemName}</h1>
      <p>{description}</p>
      <form></form>
    </div>
  );
};

export default Edit;
