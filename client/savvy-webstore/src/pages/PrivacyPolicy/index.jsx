import { Helmet } from "react-helmet";
import * as styles from "./PrivacyPolicy.css";
const PrivacyPolicyPage = () => {
  return (
    <div className={styles.privacyPolicy}>
      <Helmet>
        <title>Privacy Policy | Savvy WebStore</title>
      </Helmet>
      <h1>Our Privacy Policy</h1>
      <p className="date">Effective Date: 1st of October, 2023</p>
      <h3>1. Introduction</h3>
      <p>
        At Savvy WebStore, we are committed to protecting your privacy and
        safeguarding your personal information. This Privacy Policy outlines our
        practices concerning the collection, use, and sharing of your personal
        information when you use our webstore. By accessing or using Savvy
        WebStore, you consent to the practices described in this policy.
      </p>
      <h3>2. Information We Collect</h3>
      <p>We may collect the following types of information:</p>
      <h4>2.1. Personal Information:</h4>
      <ul>
        <li>Name</li>
        <li>Email Address</li>
        <li>Postal Address</li>
        <li>Payment Information</li>
      </ul>
      <h4>2.2. Non-Personal Information:</h4>
      <ul>
        <li>
          Cookies: We use cookies to enhance your experience on our webstore.
          You can manage cookie preferences through your web browser settings.
        </li>
        <li>
          Log Data: We collect information about your interaction with our
          webstore, including your IP address, browser type, and pages visited.
        </li>
      </ul>
      <h3>3. How We Use Your Information</h3>
      <p>We may use your information for the following purposes:</p>
      <ul>
        <li>To process and fulfill orders.</li>
        <li>To communicate with you about your orders and account.</li>
        <li>To provide customer support.</li>
        <li>
          To send promotional offers, newsletters, and marketing communications
          (you can opt out at any time).
        </li>
        <li>To analyze and improve our webstore and services.</li>
      </ul>
      <h3>4. Information Sharing</h3>
      <p>
        We may share your information with third parties under the following
        circumstances:
      </p>
      <ul>
        <li>
          Service Providers: We may share information with trusted service
          providers who assist us in operating our webstore and providing
          services to you.
        </li>
        <li>
          Legal Compliance: We may share information to comply with applicable
          laws and regulations, respond to legal requests, or protect our
          rights.
        </li>
      </ul>
      <h3>5. Data Security</h3>
      <p>
        We take reasonable measures to protect your personal information from
        unauthorized access, disclosure, or alteration. However, no data
        transmission over the internet is completely secure, and we cannot
        guarantee the security of your information.
      </p>
      <h3>6. Your Choices</h3>
      <p>You have the following rights concerning your personal information:</p>
      <ul>
        Access: You can request access to the personal information we hold about
        you.
      </ul>
      <ul>
        Correction: You can request corrections to inaccurate or incomplete
        information.
      </ul>
      <ul>
        Deletion: You can request the deletion of your personal information.
      </ul>
      <ul>
        Opt-Out: You can opt out of receiving marketing communications at any
        time.
      </ul>
      <h3>8. Changes to this Privacy Policy</h3>
      <p>
        We may update this Privacy Policy to reflect changes to our practices.
        We will notify you of any material changes by posting the updated policy
        on our webstore.
      </p>
      <div className="contactUsHighlight"></div>
      <h3>9. Contact Us</h3>
      <p>
        If you have any questions, concerns, or requests regarding this Privacy
        Policy or your personal information, please contact us at{" "}
        <a href="#">enquires@savvywebStore.com.au</a> or{" "}
        <a href="#">1300 472 293</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
