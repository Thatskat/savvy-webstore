import axios from "axios";
import config from "../config";
import { toast } from "react-toastify";

const apiInstance = axios.create({ baseURL: config.apiUrl });

apiInstance.interceptors.response.use(null, (err) => {
  const expectedErrors =
    err.response &&
    err.response.status >= 400 &&
    err.response.status &&
    err.response.status < 500;

  if (!expectedErrors) {
    toast.error("An unexpected error has occurred.");
  } else {
    toast.warn(`${err.response.data}`);
  }

  return Promise.reject(err);
});
