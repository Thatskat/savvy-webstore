import { Helmet } from "react-helmet";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import productService from "../../services/productService";
import uuidv4 from "uuid/v4";

import * as styles from "./AddProduct.css";

const AddProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    brand: "",
    colour: "",
    condition: "",
    description: "",
    isAvailable: true,
    itemName: "",
    material: "",
    onSale: false,
    size: "",
    sku: "",
    storeLocation: "",
    itemType: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);
  const {
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
    storeLocation,
    itemType,
    image,
    sku,
  } = product;

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

  const handleSku = () => {
    setProduct({ ...product, sku: uuidv4() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = productService.postProduct(product);
      console.log(res);
      navigate("/account");
    } catch (err) {
      console.error(err?.response);
      setTimeout(() => setLoading(false), 500);
    }
  };

  useEffect(() => {
    handleSku();
  }, []);
  return (
    <div className={styles.productPage}>
      <Helmet>
        <title>Add Product | Savvy WebStore</title>
      </Helmet>
      <div>
        <h1>Add Product</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
          temporibus nulla recusandae, maxime hic distinctio quaerat earum alias
          error vitae aut, quod cupiditate neque cum iste. Soluta at harum
          voluptates!
        </p>
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
              min={0}
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
              placeholder="SKU"
              value={sku}
            />
            <label htmlFor="storeLocation">Store Location</label>
            <input
              type="text"
              id="storeLocation"
              name="storeLocation"
              placeholder="Store Location"
              onChange={handleTextChange}
              value={storeLocation}
            />
            <label htmlFor="itemType">Item type</label>
            <select
              id="itemType"
              name="itemType"
              placeholder="Item Type"
              onChange={handleTextChange}
              value={itemType}
            >
              <option value="Mens">Mens</option>
              <option value="Womens">Womens</option>
              <option value="Kids">Kids</option>
              <option value="Homewares">Homewares</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Toys">Toys</option>
              <option value="Books">Books</option>
              <option value="Collectables">Collectables</option>
              <option value="Outdoor & Sport">Outdoor & Sport</option>
              <option value="Health & Beauty">Health & Beauty</option>
              <option value="Home Electrical">Home Electrical</option>
              <option value="Furniture">Furniture</option>
            </select>
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
          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
