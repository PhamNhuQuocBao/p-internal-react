import * as React from "react";
import "./App.css";
import { ColumnType, DataType } from "./interfaces/table";
import Tag from "./components/Tag";
import Dropdown from "./components/Dropdown";
import More from "./assets/icons/More.svg";
import Table from "./components/Table";

const columns: ColumnType[] = [
  {
    title: "Name",
    key: "name",
  },
  {
    title: "Status",
    key: "status",
    render: ({ status }) => <Tag value={status}>{status}</Tag>,
  },
  {
    title: "Types",
    key: "types",
  },
  {
    title: "Quantity",
    key: "quantity",
    render: ({ quantity }) => <Tag value={quantity}>{quantity}</Tag>,
  },
  {
    title: "Price",
    key: "price",
  },
  {
    title: "Brand",
    key: "brand",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Dropdown>
        <img src={More} />
      </Dropdown>
    ),
  },
];

const data: DataType[] = [
  {
    id: 1,
    name: "Playstation 5",
    status: "Available",
    types: "Kin",
    quantity: 5000,
    price: 3000,
    brand: "KinDubai",
  },
  {
    id: 2,
    status: "Sold out",
    name: "Playstation 3",
    types: "Kin",
    quantity: 5000,
    price: 3000,
    brand: "KinDubai",
  },
];

const App: React.FC = () => {
  return (
    <>
      <Table columns={columns} data={data} />
    </>
  );
};

export default App;
