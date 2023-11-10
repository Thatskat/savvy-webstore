import apiInstance from "./apiService";

function getAll() {
  return apiInstance.get("/stores");
}

function getStoreByName(storeName) {
  return apiInstance.get(`/stores/${storeName}`);
}

const storeService = {
  getAll,
  getStoreByName,
};

export default storeService;
