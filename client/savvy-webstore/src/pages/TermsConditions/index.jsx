import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import * as styles from "./TermsConditions.css";

const TermsConditionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.termsConditionsPage}>
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
      <h3>7. Intellectual Property</h3>
      <ul>
        <li>
          All content on our webstore, including text, images, logos, and
          trademarks, is the intellectual property of Savvy WebStore and is
          protected by applicable copyright and trademark laws.
        </li>
        <li>
          You may not reproduce, distribute, or use our content without our
          explicit permission.
        </li>
      </ul>
      <h3>8. User Accounts</h3>
      <ul>
        <li>
          You may be required to create a user account to access certain
          features of our webstore.
        </li>
        <li>
          You are responsible for maintaining the confidentiality of your
          account credentials and for all activities that occur under your
          account.
        </li>
      </ul>
      <h3>9. Limitation of Liability</h3>
      <ul>
        <li>
          Savvy WebStore and its affiliates are not liable for any direct,
          indirect, incidental, special, or consequential damages resulting from
          the use of our webstore or products.
        </li>
        <li>
          Our liability is limited to the purchase price of the products you buy
          from us.
        </li>
      </ul>
      <h3>10. Governing Law</h3>
      <p>
        These Terms and Conditions are governed by and construed in accordance
        with the laws of Victoria, Australia, and any disputes shall be subject
        to the exclusive jurisdiction of the courts in Victoria, Australia.
      </p>
      <h3>11. Changes to Terms</h3>
      <p>
        We reserve the right to update or modify these Terms and Conditions at
        any time. Please check this page periodically for changes. Your
        continued use of our webstore after any modifications indicates your
        acceptance of the revised terms.
      </p>
    </div>
  );
};

export default TermsConditionsPage;
