import { ReactNode } from "react";

export interface ColumnType {
  title: string;
  key: string;
  render?: (data: DataType) => ReactNode;
}

export interface DataType {
  imageProduct: string;
  name: string;
  status: string;
  types: string;
  quantity: number;
  price: number;
  brand: string;
  imageBrand: string;
  [index: string]: number | string;
}
