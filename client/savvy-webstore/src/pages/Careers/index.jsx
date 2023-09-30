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
            <StaffProfiles
              role="Front of House"
              image={staffPlaceholder}
              description="Front of house roles at Savvy WebStore involve providing excellent customer service, managing inquiries, and ensuring a seamless shopping experience for online customers."
            />
            <StaffProfiles
              role="Back of House"
              image={staffPlaceholder}
              description="Back of house roles at Savvy WebStore are responsible for tasks such as inventory management, order fulfillment, and website maintenance to ensure the smooth operation of the online store."
            />
            <StaffProfiles
              role="Warehousing"
              image={staffPlaceholder}
              description="Warehousing roles at Savvy WebStore entail efficiently organizing, storing, and managing the inventory to guarantee timely order fulfillment and minimize product handling errors."
            />
            <StaffProfiles
              role="Administration"
              image={staffPlaceholder}
              description="Administration roles at Savvy WebStore involve overseeing crucial behind-the-scenes tasks, such as payroll, record-keeping, and ensuring compliance with regulations, to keep the business operations running smoothly."
            />
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
