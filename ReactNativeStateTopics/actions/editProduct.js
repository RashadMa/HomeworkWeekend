import { baseUrl } from "./baseUrl";
import axios from "axios";

const instance = axios.create({
  baseURL: baseUrl,
});
export const editProduct = async (
  id,
  { productName, categoryName, price }
) => {
  return await instance.put(`${id}`);
};
