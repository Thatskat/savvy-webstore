import { Helmet } from "react-helmet";
import * as styles from "./Home.css";

// ASSETS
import catchPhrase from "../../assets/savvy-catchphrase.svg";

// COMPONENTS
import Card from "../../components/common/Card";
import HighlightCard from "../../components/common/HighlightCard";
import Button from "../../components/common/Button";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Savvy WebStore</title>
      </Helmet>
      <div className={styles.header}>
        <h1>
          Your<br></br>One-Stop Shop
        </h1>
        <Button link="/shop" title="Shop"/>
      </div>
      <div className={styles.overviewCategories}>
        <Card
          title="Womens"
          link="/shop/womens"
          image="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1905&q=80"
        />
        <Card
          title="Mens"
          link="/shop/mens"
          image="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1905&q=80"
        />
        <Card
          title="Kids"
          link="/shop/kids"
          image="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1905&q=80"
        />
      </div>
      <div className={styles.byCategory}>
        <h2 className={styles.headingH2}>By Category</h2>
        <div className="categoryCollection">
          <HighlightCard
            title="Womens"
            link="/shop/womens"
            image="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1905&q=80"
          />
          <HighlightCard
            title="Womens"
            link="/shop/womens"
            image="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1905&q=80"
          />
          <HighlightCard
            title="Womens"
            link="/shop/womens"
            image="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1905&q=80"
          />
          <HighlightCard
            title="Womens"
            link="/shop/womens"
            image="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1905&q=80"
          />
          <HighlightCard
            title="Womens"
            link="/shop/womens"
            image="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1905&q=80"
          />
          <HighlightCard
            title="Womens"
            link="/shop/womens"
            image="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1905&q=80"
          />
          <HighlightCard
            title="Womens"
            link="/shop/womens"
            image="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1905&q=80"
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
