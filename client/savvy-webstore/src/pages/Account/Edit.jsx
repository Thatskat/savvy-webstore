import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams, useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import { getFileFromUrl } from "../../utilities/write";
import productService from "../../services/productService";

import * as styles from "./AddProduct.css"

const Edit = () => {
  const { user } = useAuth();
  const params = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    id: params.id,
    brand: "",
    colour: "",
    condition: "",
    description: "",
    isAvailable: true,
    itemName: "",
    material: "",
    onSale:false,
    price: "",
    size: "",
    sku: "",
    storeLocation: "",
    itemType: "",
    image: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [uploadedFile, setUploadedFile] = useState("");

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
  }, []);
  async function fetchProduct() {
    try {
      const res = await productService.getById(id);
      const data = await res.data;
      setProduct((productsOnMount) => ({ ...productsOnMount, ...data }));
      if(!data.image){
        console.log('No image')
      } else {
        const fileGlob = getFileFromUrl(data.image)
        setUploadedFile(fileGlob)
      }
      console.log(data);
    } catch (err) {
      setError(true);
      console.error(err?.response);
    }
  }
  const handleTextChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };
  const handleOptionChange = (e) => {
    const boolString = "true";
    let boolValue = boolString === e.target.value;
    console.log(new Boolean(boolValue));
    setProduct({ ...product, [e.target.name]: new Boolean(boolValue) });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await productService.putProduct(id, product, uploadedFile);
      console.log(res);
      navigate("/account/products/overview")
    } catch (err) {
      console.error(err?.response);
      setTimeout(() => setLoading(false), 500);
    }
  };
  return (
    <div className={styles.productPage}>
      <Helmet>
        <title>{`Edit ${itemName} | Savvy WebStore`}</title>
      </Helmet>
      <Link to="/account/products/overview">Back to product overview</Link>
      <h1>Edit {itemName}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores vitae dolor fuga aliquid voluptatibus hic, autem ducimus porro? Eum, reiciendis.</p>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGrid}>
        <label htmlFor="itemName">Product Name</label>
        <input
          type="text"
          id="itemName"
          name="itemName"
          placeholder="Product Name"
          onChange={handleTextChange}
          value={itemName}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Description"
          onChange={handleTextChange}
          value={description}
        />
        <label htmlFor="price">Product Price</label>
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Product Price"
          onChange={handleTextChange}
          value={price}
        />
        <label htmlFor="brand">Brand</label>
        <input
          type="text"
          id="brand"
          name="brand"
          placeholder="Brand"
          onChange={handleTextChange}
          value={brand}
        />
        <label htmlFor="colour">Product Colour</label>
        <input
          type="text"
          id="colour"
          name="colour"
          placeholder="Product Colour"
          onChange={handleTextChange}
          value={colour}
        />
        <label htmlFor="condition">Product Condition</label>
        <input
          type="text"
          id="condition"
          name="condition"
          placeholder="Product Condition"
          onChange={handleTextChange}
          value={condition}
        />
        <label htmlFor="material">Material</label>
        <input
          type="text"
          id="material"
          name="material"
          placeholder="Material"
          onChange={handleTextChange}
          value={material}
        />
        <label htmlFor="size">Size</label>
        <input
          type="text"
          id="size"
          name="size"
          placeholder="Size"
          onChange={handleTextChange}
          value={size}
        />
        <label htmlFor="sku">SKU</label>
        <input
          type="text"
          id="sku"
          name="sku"
          placeholder="material"
          onChange={handleTextChange}
          value={sku}
        />
        <label htmlFor="storeLocation">Store Location</label>
        <input
          type="text"
          id="storeLocation"
          name="storeLocation"
          placeholder="material"
          onChange={handleTextChange}
          value={storeLocation}
        />
        <label htmlFor="itemType">Item type</label>
        <input
          type="text"
          id="itemType"
          name="itemType"
          placeholder="Item Type"
          onChange={handleTextChange}
          value={itemType}
        />
        </div>
  
        <label htmlFor="image">Product Image</label>
        <input
          type="file"
          id="image"
          name="image"
          placeholder="Product Image"
          onChange={handleFileChange}
        />
        <label className={styles.show}>Sale Status</label>
        <select
          id="onSale"
          name="onSale"
          onChange={handleOptionChange}
          value={onSale}
        >
          <option value={false}>False</option>
          <option value={true}>True</option>
        </select>
        <label className={styles.show}>Is Available</label>
        <select
          id="isAvailable"
          name="isAvailable"
          onChange={handleOptionChange}
          value={isAvailable}
        >
          <option value={false}>False</option>
          <option value={true}>True</option>
        </select>
        <button type="submit">Edit Product</button>
      </form>
    </div>
  );
};

export default Edit;
