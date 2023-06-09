import { baseUrl } from "./baseUrl";
import axios from "axios";

const instance = axios.create({
  baseURL: baseUrl,
});
export const getProducts = async () => {
  return await instance.get()
};