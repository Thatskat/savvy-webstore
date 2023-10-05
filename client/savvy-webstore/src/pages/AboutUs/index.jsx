import { useEffect } from "react";
import { Helmet } from "react-helmet";
import * as styles from "./AboutUs.css";

import OurSVG from "../../assets/savvy-our.svg";
import topImage from "../../assets/about-us-top-image.jpg";
import GreenBlob from "../../assets/blobs/green-blob.svg";
import BlueBlob from "../../assets/blobs/blue-blob.svg";

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.aboutUs}>
      <Helmet>
        <title>About Us | Savvy WebStore</title>
      </Helmet>
      <div className={styles.grid}>
        <div>
          <h1>About Savvy WebStore</h1>
          <p>
            Savvy WebStore is not just a clothing retailer; it&apos;s a
            destination for those who value fashion with a purpose. With a
            commitment to quality, sustainability, and style, Savvy WebStore
            curates a thoughtfully designed collection of clothing that
            transcends fleeting trends, empowering individuals to express their
            unique personalities. They&apos;ve established themselves as
            champions of sustainability, using organic and recycled materials
            and implementing eco-friendly practices across their supply chain.
            Beyond fashion, Savvy WebStore fosters a community of like-minded
            individuals who appreciate their commitment to both aesthetics and
            the environment. Whether you&apos;re seeking timeless classics or
            the latest trends, Savvy WebStore offers a shopping experience that
            aligns with conscientious values and a vision for a more
            sustainable, stylish future.
          </p>
          <p className="secondParagraph">
            At Savvy Webstore, you can explore a diverse range of products, from
            classic wardrobe staples to cutting-edge fashion pieces, all
            carefully curated to cater to a wide spectrum of styles and tastes.
          </p>
        </div>

        <img src={topImage} alt="Savvy WebStore Store Front" />
      </div>
      <div className={styles.overView}>
        <div>
          <img src={OurSVG} alt="Our" />
          <h2>Mission</h2>
          <img
            src={topImage}
            alt="Savvy WebStore's Mission"
            className="mainImage"
          />
          <p>
            Savvy WebStore&apos;s mission is to empower individuals to express
            their unique style through a carefully curated selection of
            fashion-forward clothing. We strive to provide high-quality,
            affordable clothing options that not only make our customers look
            good but also feel confident and comfortable in their own skin.
          </p>
        </div>
        <div>
          <img src={OurSVG} alt="Our" />
          <h2>Vision</h2>
          <img
            src={topImage}
            alt="Savvy WebStore's Vision"
            className="mainImage"
          />
          <p>
            Savvy WebStore&apos;s vision is to redefine fashion by curating a
            collection of timeless, high-quality clothing that transcends trends
            and empowers individuals to express their unique style. With a
            commitment to sustainability and inclusivity, they aim to inspire
            confidence and promote a more conscious approach to fashion.
          </p>
        </div>
      </div>
      <div className={styles.environmentalImpact}>
        <img
          src={BlueBlob}
          alt="Blue Blob SVG Background"
          className="blueBlob"
        />
        <img
          src={GreenBlob}
          alt="Green Blob SVG Background"
          className="greenBlob"
        />
        <div className="info">
          <h3>Our impact on the environment</h3>
          <p>
            Savvy WebStore has made substantial strides in minimizing its
            environmental footprint by adopting eco-friendly practices
            throughout its operations. They prioritize sustainable sourcing,
            using organic and recycled materials for their clothing, reducing
            waste, and minimizing their carbon emissions by optimizing
            transportation logistics. Furthermore, Savvy WebStore actively
            promotes environmental awareness among its customers, fostering a
            community of eco-conscious shoppers who appreciate both style and
            sustainability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
