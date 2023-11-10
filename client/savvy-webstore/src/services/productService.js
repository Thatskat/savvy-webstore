import apiInstance from "./apiService";

function getAll() {
  return apiInstance.get("/products");
}

function getById(id) {
  return apiInstance.get(`/products/${id}`);
}

function getItemByCategory(itemType) {
  return apiInstance.get(`/products/find/${itemType}`);
}

function postProduct(data) {
  const formData = prepareFormData(data);
  return apiInstance.post("/products", formData, formConfig);
}

function putProduct(id, data, uploadedFile) {
  const formData = prepareFormData(data, uploadedFile);
  return apiInstance.put(`/products/${id}`, formData, formConfig);
}

function deleteProduct(id) {
  return apiInstance.delete(`/products/${id}`);
}

const formConfig = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

function prepareFormData(data, uploadedFile) {
  let formData = new FormData();
  formData.append("brand", data.brand);
  formData.append("colour", data.colour);
  formData.append("condition", data.condition);
  formData.append("description", data.description);
  formData.append("isAvailable", data.isAvailable);
  formData.append("itemType", data.itemType);
  formData.append("itemName", data.itemName);
  formData.append("material", data.material);
  formData.append("onSale", data.onSale);
  formData.append("price", data.price);
  formData.append("size", data.size);
  formData.append("sku", data.sku);
  formData.append("storeLocation", data.storeLocation);
  formData.append("image", data.image);
  if (uploadedFile) {
    formData.append("uploadedFile", uploadedFile);
  }
  return formData;
}

const productService = {
  getAll,
  getById,
  postProduct,
  putProduct,
  deleteProduct,
  getItemByCategory
};

export default productService;
