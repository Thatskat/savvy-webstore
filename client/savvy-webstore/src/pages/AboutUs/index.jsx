import { Helmet } from "react-helmet";
import * as styles from "./AboutUs.css";

import OurSVG from "../../assets/savvy-our.svg";

const AboutUsPage = () => {
  return (
    <div className={styles.aboutUs}>
      <Helmet>
        <title>About Us | Savvy WebStore</title>
      </Helmet>
      <h1>About Savvy WebStore</h1>
      <div className={styles.grid}>
        <p>
          Savvy Webstore is an innovative online platform that offers a seamless
          shopping experience, combining cutting-edge technology with
          user-friendly design. With a wide range of products and services, it
          caters to diverse consumer needs, from fashion and electronics to home
          decor and more. Savvy Webstore&apos;s commitment to customer
          satisfaction and efficient delivery makes it a preferred choice for
          modern shoppers.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
