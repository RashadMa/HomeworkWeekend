import { baseUrl } from "./baseUrl";
import axios from "axios";

const instance = axios.create({
  baseURL: baseUrl,
});
export const deleteProduct = async (id) => {
  return await instance.delete(`${id}`);
};
