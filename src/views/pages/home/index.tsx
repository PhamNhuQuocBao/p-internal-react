import { FC, ReactNode, memo, useCallback } from "react";
//import stylesheets
import "./HomePage.scss";
//import components
import Button from "../../../components/Button";
import { useModalContext } from "../../../hooks/useModal";
import Modal from "../../../components/Modal";
import Form from "../../../components/Form";
//import icons
import Trash from "../../../assets/icons/Trash.svg";
import Toast from "../../../components/Toast";
import { useProductContext } from "../../../hooks/useProductContext";
import { useIdSelected } from "../../../hooks/useIdSelected";

interface HomePageProps {
  titlePage?: string;
  children?: ReactNode;
}

const HomePage: FC<HomePageProps> = ({ titlePage, children }) => {
  const {
    isOpenForm,
    setIsOpenForm,
    isConfirmDeleteOpen,
    setIsConfirmDeleteOpen,
    isErrorModalOpen,
    setIsErrorModalOpen,
  } = useModalContext();

  const { idSelected } = useIdSelected();

  const { handleDeleteProduct } = useProductContext();

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
        <section className="homepage__content">{children}</section>;
      </main>
      {isOpenForm && (
        <Modal title="Add new product" open={isOpenForm}>
          <Form />
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
