import { DataType } from "../../interfaces/table";
import { API } from "../../utils/apiConfig";

const endPoint = "/products";

export type IdProduct = keyof { [x: number]: DataType };

export const getProduct = async () => {
  try {
    const res = await API.get(endPoint);
    return res.data;
  } catch (err) {
    throw new Error("Failed to request data");
  }
};

export const createProduct = async (product: DataType) => {
  try {
    const res = await API.post(endPoint, product);
    return res.data;
  } catch (error) {
    throw new Error("Failed to create data");
  }
};

export const updateProduct = async (id: IdProduct, product: DataType) => {
  try {
    const res = await API.put(`${endPoint}/${id}`, product);
    return res.data;
  } catch (error) {
    throw new Error("Failed to update data");
  }
};

export const deleteProduct = async (id: IdProduct) => {
  try {
    const res = await API.delete(`${endPoint}/${id}`);
    return res.data;
  } catch (error) {
    throw new Error("Failed to update data");
  }
};
