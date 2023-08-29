import axios from "axios";

const BASE_URL_PRODUCT = "http://localhost:3000";

export const API = axios.create({
  baseURL: BASE_URL_PRODUCT,
});
