import { Helmet } from "react-helmet";
import * as styles from "./Careers.css";

import StaffProfiles from "../../components/features/StaffProfiles";

import staffPlaceholder from "../../assets/staff-placeholder.jpg";
import savvyJoin from "../../assets/savvy-join.svg";
import savvyWantTo from "../../assets/savvy-want-to.svg";
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
              description="Administration roles at Savvy WebS
              tore involve overseeing crucial behind-the-scenes tasks, such as payroll, record-keeping, and ensuring compliance with regulations, to keep the business operations running smoothly."
            />
          </div>
        </div>
        <div className={styles.formBox}>
          <div className="applyNow">
            <img src={savvyJoin} alt="Join our friendly team" />
            <h2>Apply Now</h2>
            <p>Click below to see our current position vacancies.</p>
            <a href="#" target="_blank" rel="noreferrer">
              Apply Now
            </a>
          </div>
          <div>
            <img src={savvyWantTo} alt="Want to" />
            <h2>Find out more?</h2>
            <p>
              If you&apos;re interested in learning more about working at Savvy
              WebStore, please don&apos;t hesitate to reach out to our HR
              department for additional information and job inquiries.
            </p>
            <form>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
              />
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
              />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Email" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
