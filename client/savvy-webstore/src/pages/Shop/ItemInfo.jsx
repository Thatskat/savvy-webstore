import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const ItemInfo = () => {
  return (
    <div>
      <Helmet>
        <title>Item Name | Savvy WebStore</title>
      </Helmet>
      <div>
        <div>
          <img />
        </div>
        <div>
          <Link to="/stores/location">Store location</Link>
          <h1>Product Name</h1>
          <p>SKU:</p>
          <p>item description</p>
          <h2>Price</h2>
          <div>
            <button>Add to cart</button>
            <button>Heart</button>
          </div>
          <h4>Delivery options</h4>
          <h3>Condition</h3>
          <h3>Brands</h3>
          <h3>Colour</h3>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
