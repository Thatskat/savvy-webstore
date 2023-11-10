import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const EditAccount = () => {
  const { user } = useAuth();
  return (
    <div>
      <Helmet>
        <title>Edit Account | Savvy WebStore</title>
      </Helmet>
      <h1>Edit Account</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, cumque?</p>
      <form>
        
      </form>
    </div>
  );
};

export default EditAccount;
