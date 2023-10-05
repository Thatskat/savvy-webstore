import { useEffect } from "react";
import { Helmet } from "react-helmet";
import * as styles from "./Returns.css";

import blueBlob from "../../assets/blobs/blue-blob.svg";
import greenBlob from "../../assets/blobs/green-blob.svg";
const ReturnsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.returnsPage}>
      <Helmet>
        <title>Returns | Savvy WebStore</title>
      </Helmet>
      <h1>Our Returns Policy</h1>
      <p>
        At Savvy WebStore, we want to ensure your complete satisfaction with
        your purchase. If you are not entirely satisfied with your order, we are
        here to help. Please read our returns policy below to understand our
        guidelines:
      </p>
      <h3>1. Eligibility for Returns:</h3>
      <ul>
        <li>
          You may initiate a return within 30 days from the date of purchase.
        </li>
        <li>
          To be eligible for a return, the item must be in its original
          condition, unused, and in the original packaging.
        </li>
      </ul>
      <h3>2. Non-Returnable Items:</h3>
      <ul>
        <li>
          Some items, including but not limited to personalized or custom-made
          products, perishable goods, and downloadable software, are
          non-returnable.
        </li>
      </ul>
      <h3>3. Return Process:</h3>
      <ul>
        <li>
          To initiate a return, please contact our Customer Service team at{" "}
          <a>returns@savvyWebstore.com.au</a>
        </li>
        <li>
          Provide your order number, the item(s) you wish to return, and the
          reason for the return.
        </li>
        <li>
          Our team will guide you through the return process and provide you
          with a return authorization if applicable.
        </li>
      </ul>
      <h3>4. Return Shipping:</h3>
      <ul>
        <li>
          You are responsible for the cost of return shipping unless the item is
          damaged, defective, or an error occurred on our part.
        </li>
        <li>
          We recommend using a trackable shipping method to ensure the safe
          return of your item.
        </li>
      </ul>
      <h3>5. Refund or Exchange:</h3>
      <ul>
        <li>
          Upon receiving and inspecting the returned item, we will notify you
          about the status of your refund or exchange.
        </li>
        <li>
          If approved, refunds will be issued to the original payment method
          within 5 business days.
        </li>
        <li>
          Exchanges will be processed promptly, and we will ship the replacement
          item to you.
        </li>
      </ul>
      <h3>6. Damaged or Defective Items:</h3>
      <ul>
        <li>
          If you receive a damaged or defective item, please contact us
          immediately.
        </li>
        <li>
          We will arrange for a return, replacement, or refund as per your
          preference.
        </li>
      </ul>
      <h3>7. Customer Satisfaction:</h3>
      <ul>
        <li>
          Your satisfaction is our top priority, and we aim to resolve any
          issues promptly and fairly.
        </li>
        <li>
          If you have any questions or concerns about our returns policy, please
          don&apos;t hesitate to contact us.
        </li>
      </ul>
      <img src={blueBlob} alt="Blue Blob SVG" className={styles.blueBlob} />
      <img src={greenBlob} alt="Green Blob SVG" className={styles.greenBlob} />
      <div className={styles.highlightBox}>
        <p>
          We value your business and strive to provide the best shopping
          experience at Savvy WebStore. Thank you for choosing us for your
          online shopping needs.
        </p>
      </div>
    </div>
  );
};

export default ReturnsPage;
