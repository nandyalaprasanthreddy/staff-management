import axios from "axios";
// import { localStorageGetItem } from "./localStorage";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  async (error) => {
    return Promise.reject(error);
  }
);
