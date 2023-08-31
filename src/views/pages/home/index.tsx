import { FC, ReactNode, memo, useCallback } from "react";
import { Link } from "react-router-dom";
//import stylesheets
import "./HomePage.scss";
//import components
import Button from "../../../components/Button";
import { useModalContext } from "../../../hooks/useModal";
import Modal from "../../../components/Modal";
import Form from "../../../components/Form";
//import icons
import Trash from "../../../assets/icons/Trash.svg";
import More from "../../../assets/icons/More.svg";
import Toast from "../../../components/Toast";
import { useProductContext } from "../../../hooks/useProductContext";
import { useIdSelected } from "../../../hooks/useIdSelected";
import Table from "../../../components/Table";
import { ColumnType } from "../../../interfaces/table";
import Tag from "../../../components/Tag";
import Dropdown from "../../../components/Dropdown";

interface HomePageProps {
  titlePage?: string;
  children?: ReactNode;
}

const columnsTable: ColumnType[] = [
  {
    title: "Name",
    key: "name",
    render: ({ name, imageProduct, id }) => (
      <Link to={`/detail/product/${id}`}>
        <div className="product">
          <img className="product__image" src={imageProduct} alt={name} />
          <p className="product__name">{name}</p>
        </div>
      </Link>
    ),
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
    render: ({ price }) => <span>{`$${price}`}</span>,
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

const HomePage: FC<HomePageProps> = ({ titlePage }) => {
  const {
    isOpenForm,
    setIsOpenForm,
    isOpenFormUpdate,
    isConfirmDeleteOpen,
    setIsConfirmDeleteOpen,
    isErrorModalOpen,
    setIsErrorModalOpen,
  } = useModalContext();

  const { idSelected } = useIdSelected();

  const { handleDeleteProduct, products } = useProductContext();

  const handleOpenModal = () => {
    setIsOpenForm(!isOpenForm);
  };

  const handleDelete = useCallback(() => {
    handleDeleteProduct(idSelected);
    setIsConfirmDeleteOpen(false);
  }, [handleDeleteProduct, idSelected, setIsConfirmDeleteOpen]);

  return (
    <>
      <main className="container">
        <h1 className="homepage__title">{titlePage}</h1>
        <div className="homepage__button">
          <Button className="button-add" onClick={handleOpenModal}>
            Add New Product
          </Button>
        </div>
        <section className="homepage__content">
          <Table columns={columnsTable} data={products} />
        </section>
        ;
      </main>
      {isOpenForm && (
        <Modal title="Add new product" open={isOpenForm}>
          <Form />
        </Modal>
      )}
      {isOpenFormUpdate && (
        <Modal title="Products information" open={isOpenFormUpdate}>
          <Form id={idSelected} />
        </Modal>
      )}
      {isConfirmDeleteOpen && (
        <Modal
          header={<img src={Trash} className="toast__icon" />}
          title=""
          open={isConfirmDeleteOpen}
        >
          <Toast
            title="Delete product"
            content=" Are you sure you want to delete this product? This action cannot be
          undone."
          />
          <div className="group__button__modal">
            <Button
              onClick={() => {
                setIsConfirmDeleteOpen(false);
              }}
            >
              Cancel
            </Button>
            <Button type="danger" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </Modal>
      )}
      {isErrorModalOpen && (
        <Modal
          header={<img src={Trash} className="toast__icon" />}
          title=""
          open={isErrorModalOpen}
        >
          <Toast title="Ooops!" content="Something went wrong" />
          <div className="group__button__modal">
            <Button
              type="danger"
              onClick={() => {
                setIsErrorModalOpen(false);
              }}
            >
              Close
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};

HomePage.defaultProps = {
  titlePage: "Home Page",
};

export default memo(HomePage);
