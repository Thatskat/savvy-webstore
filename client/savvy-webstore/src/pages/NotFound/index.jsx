import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import * as styles from "./NotFound.css"

const PageNotFound = () => {
  return (
    <div className={styles.notFound}>
      <Helmet>
        <title>Page Not Found | Savvy WebStore</title>
      </Helmet>
      <h1>Oh No!</h1>
      <p>The page you were looking for could not be found. Maybe it&apos;s time for you to return <Link to="/" title="Savvy WebStore Home">Home</Link>.</p>
    </div>
  );
};

export default PageNotFound;
