import apiInstance from "./apiService";
async function registerUser(user) {
  const res = await apiInstance.post("/auth/register", user);
  return res;
}

async function loginUser(user) {
  const res = await apiInstance.post("/auth/login", user);
  return res;
}

const authorizationServices = {
  registerUser,
  loginUser,
};

export default authorizationServices;
