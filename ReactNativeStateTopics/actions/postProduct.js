import { baseUrl } from "./baseUrl";
import axios from "axios";

const instance = axios.create({
  baseURL: baseUrl,
});
export const postProduct = async (productName, categoryName, price) => {
  return await instance.post(productName, categoryName, price);
};
