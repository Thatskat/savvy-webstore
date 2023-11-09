import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import * as styles from './Cart.css'
const CartPage = () => {
  return (
    <div className={styles.cart}>
      <Helmet>
        <title>Cart | Savvy WebStore</title>
      </Helmet>
      <h1>Your Shopping Bag</h1>
      <div className="grid">
        <div>
          <Link to="/shop">Continue Shopping</Link>
          
        </div>
        <div className="orderSummary">
          <h2>Order Summary</h2>
          <h3># Items</h3>
          <p>1 item</p>
          <h3>Sub Total</h3>
          <p>$15</p>
          <h3>Delivery</h3>
          <p>
            Due to multiple stores supplying goods shipping will be determined
            at checkout.
          </p>
          <button className="btn"><Link to="">Proceed to Checkout</Link></button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
