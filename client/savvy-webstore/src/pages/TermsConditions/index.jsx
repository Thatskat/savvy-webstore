import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const TermsConditionsPage = () => {
  return (
    <div>
      <Helmet>
        <title>Terms & Conditions | Savvy WebStore</title>
      </Helmet>
      <h1>Terms and Conditions</h1>
      <h3>1. Acceptance of Terms</h3>
      <p>
        By accessing and using Savvy WebStore, you agree to comply with and be
        bound by these Terms and Conditions. If you do not agree with any part
        of these terms, please refrain from using our webstore.
      </p>
      <h3>2. Privacy Policy</h3>
      <p>
        Your use of our webstore is also governed by our Privacy Policy, which
        can be found <Link to="/privacy-policy">here</Link>. Please review this
        policy to understand how we collect, use, and protect your personal
        information.
      </p>
      <h3>3. Product Information</h3>
      <ul>
        <li>
          We make every effort to ensure that product descriptions, images, and
          prices are accurate and up-to-date. However, we do not guarantee the
          accuracy or completeness of this information.
        </li>
        <li>
          We reserve the right to modify product details, prices, and
          availability without notice.
        </li>
      </ul>
      <h3>4. Orders and Payments</h3>
      <ul>
        <li>
          Placing an order on our webstore constitutes an offer to purchase the
          selected products.
        </li>
        <li>
          We reserve the right to refuse or cancel any order at our discretion.
        </li>
        <li>
          Payment is required at the time of order placement, and we accept
          various payment methods as specified during the checkout process.
        </li>
      </ul>
      <h3>5. Shipping and Delivery</h3>
      <ul>
        <li>
          Shipping times and costs are specified during the checkout process.
        </li>
        <li>
          We are not responsible for delays in delivery or any damages incurred
          during shipping, which are the responsibility of the shipping carrier.
        </li>
      </ul>
      <h3>6. Returns and Refunds</h3>
      <p>
        Please refer to our Returns Policy, which can be found{" "}
        <Link to="/returns">here</Link>, for information on returns, refunds,
        and exchanges.
      </p>
      
    </div>
  );
};

export default TermsConditionsPage;
