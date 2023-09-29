const StaffProfiles = ({ role, image, description }) => {
  return (
    <div>
      {" "}
      <h3>{role}</h3>
      <img src={image} alt={role} />
      <p>{description}</p>
    </div>
  );
};

export default StaffProfiles;
