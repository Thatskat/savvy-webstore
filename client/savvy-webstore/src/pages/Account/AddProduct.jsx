import { Helmet } from "react-helmet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import productService from "../../services/productService";

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
    price: "",
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
    sku,
    storeLocation,
    itemType,
    image,
  } = product;

  const handleTextChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
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
  return (
    <div>
      <Helmet>
        <title>Add Product | Savvy WebStore</title>
      </Helmet>
      <div>
        <h1>Add Product</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe temporibus nulla recusandae, maxime hic distinctio quaerat earum alias error vitae aut, quod cupiditate neque cum iste. Soluta at harum voluptates!</p>
        <form>
            <
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
