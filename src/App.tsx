import * as React from "react";
//import stylesheets
import "./App.css";
//import interfaces
import { ColumnType } from "./interfaces/table";
//import icons
import More from "./assets/icons/More.svg";
//import components
import Tag from "./components/Tag";
import Dropdown from "./components/Dropdown";
import Table from "./components/Table";
import HomePage from "./views/pages/home";
//import custom hooks
import { useProductContext } from "./hooks/useProductContext";

const columnsTable: ColumnType[] = [
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
    render: ({ id }) => (
      <Dropdown id={id as number}>
        <img src={More} />
      </Dropdown>
    ),
  },
];

const App: React.FC = () => {
  const { products } = useProductContext();
  return (
    <>
      <HomePage titlePage="Management">
        <Table columns={columnsTable} data={products} />
      </HomePage>
    </>
  );
};

export default App;
