import { Helmet } from "react-helmet";

import * as styles from "./Shipping.css";

const ShippingPage = () => {
  return (
    <div className={styles.shipping}>
      <Helmet>
        <title>Shipment | Savvy WebStore</title>
      </Helmet>
      <h1>Shipment</h1>
      <p className="subText">
        At Savvy WebStore, we believe that shopping should be an experience, not
        just a transaction. That&apos;s why we&apos;ve curated a collection of
        the hottest trends and must-have items to bring style and sophistication
        right to your doorstep!
      </p>
      <h3>Fast and Reliable Shipping</h3>
      <p>
        Say goodbye to long waits and hello to quick deliveries! Our team at
        Savvy WebStore understands that you&apos;re excited to get your hands on
        your new goodies. That&apos;s why we&apos;ve partnered with top-notch
        shipping carriers to ensure your orders are on their way to you in
        record time.
      </p>
      <h3>Worldwide Delivery</h3>
      <p>
        Whether you&apos;re in the heart of the city or exploring the farthest
        corners of the globe, Savvy WebStore is here to serve you. We offer
        international shipping to bring the Savvy experience to fashion-forward
        individuals all around the world.
      </p>
      <h3>Secure Packaging</h3>
      <p>
        Your satisfaction and the safety of your purchases are our top
        priorities. Rest assured that each item is meticulously packed to ensure
        it arrives at your doorstep in pristine condition. Unbox your order with
        confidence, knowing that Savvy WebStore has taken every precaution to
        protect your treasures.
      </p>
      <h3>User-Friendly Shopping</h3>
      <p>
        Navigating our webstore is as easy as pie! With a clean and intuitive
        interface, finding the perfect additions to your collection is a breeze.
        Our search and filter options make it simple to discover the latest
        trends or locate that one-of-a-kind item you&apos;ve been searching for.
      </p>
      <h3>Customer Satisfaction Guarantee</h3>
      <p>
        We stand by the quality of our products, and your satisfaction is our
        priority. If you ever have questions, concerns, or just want to share
        your excitement about your latest purchase, our customer support team is
        here to assist you.
      </p>
      <div className="highlight">
        <p>
          Ready to elevate your style with Savvy WebStore? Explore our
          collections, place your order, and get ready to experience fashion
          like never before!
        </p>
        <h3>Happy Shopping!</h3>
      </div>
    </div>
  );
};

export default ShippingPage;
