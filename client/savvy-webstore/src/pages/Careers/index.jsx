import { Helmet } from "react-helmet";
import Button from "../../components/common/Button";
import * as styles from "./Careers.css";

import StaffProfiles from "../../components/features/StaffProfiles";

import staffPlaceholder from "../../assets/staff-placeholder.jpg";
const CareersPage = () => {
  return (
    <div className={styles.careersPage}>
      <Helmet>
        <title>Careers | Savvy WebStore</title>
      </Helmet>
      <div className={styles.grid}>
        <div className="generalInfo">
          <h1>Careers at Savvy WebStore</h1>
          <p>
            Savvy WebStore is actively seeking additional staff to meet growing
            customer demand and enhance the quality of service provided.
          </p>
          <div className="staffProfiles">
            <div>
              {" "}
              <h3>Front of House</h3>
              <img
                src={staffPlaceholder}
                alt="Front of House Staff at Savvy WebStore"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                quae.
              </p>
            </div>
       <StaffProfiles role="Back of House" image={staffPlaceholder} description="lorem20"/>
            <div>
              {" "}
              <h3>Front of House</h3>
              <img
                src={staffPlaceholder}
                alt="Front of House Staff at Savvy WebStore"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                quae.
              </p>
            </div>
       
          </div>
        </div>
        <div className={styles.formBox}>
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
    </div>
  );
};

export default CareersPage;
