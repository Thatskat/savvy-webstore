import apiInstance from "./apiService";
async function registerUser(user) {
  const res = await apiInstance.post("/auth/register", user);
  return res;
}

async function loginUser(user) {
  const res = await apiInstance.post("/auth/login", user);
  return res;
}

async function loginUserUsername(user) {
  const res = await apiInstance.post("/auth/login/username", user);
  return res;
}

async function editUser(id) {
  const res = await apiInstance.put(`/auth/edit/${id}`);
  return res;
}

const authorizationServices = {
  registerUser,
  loginUser,
  loginUserUsername,
  editUser
};

export default authorizationServices;
