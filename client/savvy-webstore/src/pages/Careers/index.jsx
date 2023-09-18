import { Helmet } from "react-helmet";
import Button from "../../components/common/Button";
const CareersPage = () => {
  return (
    <div>
      <Helmet>
        <title>Careers | Savvy WebStore</title>
      </Helmet>
      <div>
        <h1>Careers at Savvy WebStore</h1>
        <p>
          Savvy WebStore is actively seeking additional staff to meet growing
          customer demand and enhance the quality of service provided.
        </p>
      </div>
      <div>
        <div>
          <h2>Apply Now</h2>
          <p>Click below to see our current position vacancies.</p>
          <Button />
        </div>
        <div>
          <h2>Want to find out more?</h2>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
