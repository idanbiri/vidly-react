import axios from "axios";
import { getAccessToken } from "../services/LocalStorageService";

let instance = axios.create({
  baseURL: "http://localhost:4000"
});

instance.interceptors.request.use(
  config => {
    const token = getAccessToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

export default instance;
