import { memo, FC, useState, useCallback } from "react";
//import components
import FormItem from "./FormItem";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
//import constants
import { optionStatus, optionType } from "../../constants/options";
//import stylesheets
import "./Form.scss";
import { useModalContext } from "../../hooks/useModal";
import { DataType } from "../../interfaces/table";
import { useProductContext } from "../../hooks/useProductContext";

interface FormProps {
  id?: string;
}

const Form: FC<FormProps> = () => {
  const { setIsOpen } = useModalContext();
  const { handleCreateProduct } = useProductContext();
  const [dataTable, setDataTable] = useState<DataType>({
    imageProduct: "",
    name: "",
    status: "",
    types: "",
    quantity: 0,
    price: 0,
    brand: "",
    imageBrand: "",
  });

  const handleSubmit = useCallback(() => {
    handleCreateProduct(dataTable);
    console.log(dataTable);
  }, [dataTable, handleCreateProduct]);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <FormItem classNameError="error-message" label="Image Product">
          <Input
            type="text"
            id="imageProduct"
            name="imageProduct"
            placeholder="url image..."
            value={dataTable.imageProduct}
            onChange={(e) => {
              setDataTable({ ...dataTable, imageProduct: e.target.value });
            }}
          />
        </FormItem>
        <FormItem classNameError="error-message" label="Name">
          <Input
            type="text"
            id="name"
            name="name"
            value={dataTable.name}
            placeholder="Enter name..."
            onChange={(e) => {
              setDataTable({ ...dataTable, name: e.target.value });
            }}
          />
        </FormItem>
        <FormItem classNameError="error-message" label="Quantity">
          <Input
            type="number"
            id="quantity"
            name="quantity"
            value={dataTable.quantity}
            placeholder="0"
            onChange={(e) => {
              setDataTable({
                ...dataTable,
                quantity: e.target.value as unknown as number,
              });
            }}
          />
        </FormItem>
        <FormItem classNameError="error-message" label="Price">
          <Input
            type="number"
            id="price"
            name="price"
            value={dataTable.price}
            placeholder="0"
            onChange={(e) => {
              setDataTable({
                ...dataTable,
                price: e.target.value as unknown as number,
              });
            }}
          />
        </FormItem>
        <div className="cols--2">
          <FormItem classNameError="error-message" label="Status">
            <Select
              id="status"
              name="status"
              value={dataTable.status}
              options={optionStatus}
              onChange={(e) => {
                setDataTable({
                  ...dataTable,
                  status: e.target.value,
                });
              }}
            />
          </FormItem>
          <FormItem classNameError="error-message" label="Types">
            <Select
              id="types"
              name="types"
              value={dataTable.types}
              options={optionType}
              onChange={(e) => {
                setDataTable({
                  ...dataTable,
                  types: e.target.value,
                });
              }}
            />
          </FormItem>
        </div>
        <div className="cols--2">
          <FormItem classNameError="error-message" label="Brand">
            <Input
              type="text"
              id="brand"
              name="brand"
              value={dataTable.brand}
              placeholder="Enter brand..."
              onChange={(e) => {
                setDataTable({
                  ...dataTable,
                  brand: e.target.value,
                });
              }}
            />
          </FormItem>
          <FormItem classNameError="error-message" label="Brand Image">
            <Input
              type="text"
              id="imageBrand"
              name="imageBrand"
              value={dataTable.imageBrand}
              placeholder="url image..."
              onChange={(e) => {
                setDataTable({
                  ...dataTable,
                  imageBrand: e.target.value,
                });
              }}
            />
          </FormItem>
        </div>
        <div
          className="cols--2"
          style={{ display: "fex", justifyContent: "end", marginTop: "20px" }}
        >
          <Button
            type="default"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button type="primary" onClick={handleSubmit}>
            Confirm
          </Button>
        </div>
      </form>
    </>
  );
};

export default memo(Form);
