import { memo, FC, useState, useCallback, useEffect } from "react";
//import components
import FormItem from "./FormItem";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
//import constants
import { optionStatus, optionType } from "../../constants/options";
//import interfaces
import { DataType } from "../../interfaces/table";
//import custom hooks
import { useModalContext } from "../../hooks/useModal";
import { useProductContext } from "../../hooks/useProductContext";
//import validate
import { Errors, validator } from "../../utils/validator";
//import stylesheets
import "./Form.scss";

interface FormProps {
  id?: number;
}

const Form: FC<FormProps> = ({ id }) => {
  const { setIsOpenForm, setIsOpenFormUpdate } = useModalContext();

  const [errorMessages, setErrorMessages] = useState<Errors>({
    imageProduct: "",
    name: "",
    status: "",
    types: "",
    quantity: "",
    price: "",
    brand: "",
    imageBrand: "",
  });

  const { handleUpdateProduct, handleCreateProduct, products } =
    useProductContext();

  const [dataTable, setDataTable] = useState<DataType>({
    id: 0,
    imageProduct: "",
    name: "",
    status: "",
    types: "",
    quantity: 0,
    price: 0,
    brand: "",
    imageBrand: "",
  });

  useEffect(() => {
    if (id) {
      const [informProduct] = products.filter((product) => {
        return product.id === id;
      });
      setDataTable(informProduct);
    }
  }, [id, products]);

  const handleSubmit = useCallback(() => {
    const errors = validator({
      isRequired: [
        { key: "imageProduct", value: dataTable.imageProduct },
        { key: "name", value: dataTable.name },
        { key: "status", value: dataTable.status },
        { key: "types", value: dataTable.types },
        { key: "quantity", value: dataTable.quantity },
        { key: "price", value: dataTable.price },
        { key: "brand", value: dataTable.brand },
        { key: "imageBrand", value: dataTable.imageBrand },
      ],
    });
    setErrorMessages(errors.errors);
    if (errors.valid) {
      handleCreateProduct({ ...dataTable, id: Date.now() });
      setIsOpenForm(false);
    }
  }, [dataTable, handleCreateProduct, setIsOpenForm]);

  const handleUpdate = useCallback(() => {
    const errors = validator({
      isRequired: [
        { key: "imageProduct", value: dataTable.imageProduct },
        { key: "name", value: dataTable.name },
        { key: "status", value: dataTable.status },
        { key: "types", value: dataTable.types },
        { key: "quantity", value: dataTable.quantity },
        { key: "price", value: dataTable.price },
        { key: "brand", value: dataTable.brand },
        { key: "imageBrand", value: dataTable.imageBrand },
      ],
    });
    setErrorMessages(errors.errors);
    if (id) {
      if (errors.valid) {
        handleUpdateProduct(id, dataTable);
        setIsOpenFormUpdate(false);
      }
    }
  }, [dataTable, handleUpdateProduct, id, setIsOpenFormUpdate]);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <FormItem
          classNameError="error-message"
          label="Image Product"
          errorValue={errorMessages.imageProduct}
        >
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
        <FormItem
          classNameError="error-message"
          label="Name"
          errorValue={errorMessages.name}
        >
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
        <FormItem
          classNameError="error-message"
          label="Quantity"
          errorValue={errorMessages.quantity}
        >
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
        <FormItem
          classNameError="error-message"
          label="Price"
          errorValue={errorMessages.price}
        >
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
          <FormItem
            classNameError="error-message"
            label="Status"
            errorValue={errorMessages.status}
          >
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
          <FormItem
            classNameError="error-message"
            label="Types"
            errorValue={errorMessages.types}
          >
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
          <FormItem
            classNameError="error-message"
            label="Brand"
            errorValue={errorMessages.brand}
          >
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
          <FormItem
            classNameError="error-message"
            label="Brand Image"
            errorValue={errorMessages.imageBrand}
          >
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
              setIsOpenForm(false);
              setIsOpenFormUpdate(false);
            }}
          >
            Cancel
          </Button>
          <Button type="primary" onClick={id ? handleUpdate : handleSubmit}>
            Confirm
          </Button>
        </div>
      </form>
    </>
  );
};

Form.defaultProps = {
  id: 0,
};

export default memo(Form);
