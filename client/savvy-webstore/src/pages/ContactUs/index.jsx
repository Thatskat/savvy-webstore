import { Helmet } from "react-helmet";
import * as styles from "./ContactUs.css";
const ContactUsPage = () => {
  return (
    <div className={styles.contactUs}>
      <Helmet>
        <title>Contact Us | Savvy WebStore</title>
      </Helmet>
      <h1>Contact Us</h1>
      <p className="subText">
        Welcome to Savvy WebStore! We&apos;re here to assist you with any
        questions, concerns, or feedback you may have. Our goal is to provide
        you with an exceptional shopping experience, and we value your input.
        Feel free to get in touch with us through the following methods:
      </p>
      <h3>Customer Support Email:</h3>
      <p>
        For general inquiries, product information, or order-related questions,
        please email us at <a href="mailto:contact@savvywebstore.com.au">contact@savvywebstore.com.</a> Our customer support team
        will get back to you within 24 hours, Monday through Friday.
      </p>
      <h3>Phone Support:</h3>
      <p>
        If you prefer to speak with a customer service representative, you can
        reach us at <a href="tel:1300 472 293">1300 472 293</a> during our business hours, which are
        Monday through Friday from 9:00 AM to 5:00 PM (Eastern Time).
      </p>
      <h3>Social Media:</h3>
      <p>
        Stay connected with us on social media platforms. Follow us on{" "}
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
          title="Facebook"
        >
          Facebook
        </a>
        ,{" "}
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
          title="Twitter"
        >
          Twitter
        </a>
        , and{" "}
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          title="Instagram"
        >
          Instagram
        </a>{" "}
        for the latest updates, promotions, and customer stories.
      </p>
      <p>
        Your satisfaction is our top priority, and we&apos;re committed to
        providing you with the best support possible. Thank you for choosing
        Savvy WebStore, and we look forward to assisting you with any questions
        or concerns.
      </p>
    </div>
  );
};

export default ContactUsPage;
