import axios from "axios";

const BASE_URL_PRODUCT = "https://64f068c58a8b66ecf7799be5.mockapi.io";

export const API = axios.create({
  baseURL: BASE_URL_PRODUCT,
});
