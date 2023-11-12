import { useEffect } from "react";
import { Helmet } from "react-helmet";
import * as styles from "./Home.css";

// ASSETS
import catchPhrase from "../../assets/savvy-catchphrase.svg";

// COMPONENTS
import Card from "../../components/common/Card";
import HighlightCard from "../../components/common/HighlightCard";
import Button from "../../components/common/Button";

// HIGHLIGHT IMAGES
import womenHighlight from "../../assets/highlights/womens-highlight.webp";
import menHighlight from "../../assets/highlights/mens-highlight.webp";
import kidHighlight from "../../assets/highlights/kids-highlight.webp";
import homewaresHighlight from "../../assets/highlights/homewares-highlight.webp";
import toysHighlight from "../../assets/highlights/toys-highlight.webp";
import entertainmentHighlight from "../../assets/highlights/entertainment-highlight.webp";
import booksHighlight from "../../assets/highlights/books-highlight.webp";
import collectablesHighlight from "../../assets/highlights/collectables-highlight.webp";
import sportHighlight from "../../assets/highlights/sport-highlight.webp";
import beautyHighlight from "../../assets/highlights/beauty-highlight.webp";
import electricalHighlight from "../../assets/highlights/electrical-highlight.webp";
import furnitureHighlight from "../../assets/highlights/furniture-highlight.webp";

// TAB IMAGES
import womensTab from "../../assets/tab/womens-tab.webp";
import mensTab from "../../assets/tab/mens-tab.webp";
import kidsTab from "../../assets/tab/kids-tab.webp"

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Home | Savvy WebStore</title>
      </Helmet>
      <div className={styles.header}>
        <h1>
          Your<br></br>One-Stop Shop
        </h1>
        <Button link="/shop" title="Shop" />
      </div>
      <div className={styles.overviewCategories}>
        <Card
          title="Womens"
          link="/shop/womens"
          image={womensTab}
        />
        <Card
          title="Mens"
          link="/shop/mens"
          image={mensTab}
        />
        <Card
          title="Kids"
          link="/shop/kids"
          image={kidsTab}
        />
      </div>
      <div className={styles.byCategory}>
        <h2 className={styles.headingH2}>By Category</h2>
        <div className="categoryCollection">
          <HighlightCard
            title="Womens"
            link="/shop/womens"
            image={womenHighlight}
          />
          <HighlightCard
            title="Mens"
            link="/shop/mens"
            image={menHighlight}
          />
          <HighlightCard
            title="Kids"
            link="/shop/kids"
            image={kidHighlight}
          />
          <HighlightCard
            title="Homewares"
            link="/shop/homewares"
            image={homewaresHighlight}
          />
          <HighlightCard
            title="Entertainment"
            link="/shop/entertainment"
            image={entertainmentHighlight}
          />
          <HighlightCard
            title="Toys"
            link="/shop/toys"
            image={toysHighlight}
          />
          <HighlightCard
            title="Books"
            link="/shop/books"
            image={booksHighlight}
          />
          <HighlightCard
            title="Collectables"
            link="/shop/collectables"
            image={collectablesHighlight}
          />
          <HighlightCard
            title="Outdoor & Sport"
            link="/shop/outdoor-sport"
            image={sportHighlight}
          />
          <HighlightCard
            title="Health & Beauty"
            link="/shop/health-beauty"
            image={beautyHighlight}
          />
          <HighlightCard
            title="Home Electrical"
            link="/shop/electrical"
            image={electricalHighlight}
          />
          <HighlightCard
            title="Furniture"
            link="/shop/furniture"
            image={furnitureHighlight}
          />
        </div>
      </div>
      <div className={styles.reviewHighlight}>
        <div>
          <h3>Lorem ipsum dolor sit.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            quis?
          </p>
        </div>
      </div>
      <div className={styles.catchPhrase}>
        <img src={catchPhrase} alt="Smart" />
        <h2 className={styles.headingH2}>Shopping Starts</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione,
          voluptatem!
        </p>
      </div>
      <div className={styles.overviewCategories}>
        <Card
          title="Careers"
          link="/careers"
          image="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1905&q=80"
        />
        <Card
          title="About"
          link="/about"
          image="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1905&q=80"
        />
        <Card
          title="Contact"
          link="/contact"
          image="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1905&q=80"
        />
      </div>
    </div>
  );
};

export default HomePage;
