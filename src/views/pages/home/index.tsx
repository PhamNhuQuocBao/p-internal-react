import { FC, ReactNode, memo } from "react";
//import stylesheets
import "./HomePage.scss";
//import components
import Button from "../../../components/Button";
import { useModalContext } from "../../../hooks/useModal";
import Modal from "../../../components/Modal";
import Form from "../../../components/Form";

interface HomePageProps {
  titlePage?: string;
  children?: ReactNode;
}

const HomePage: FC<HomePageProps> = ({ titlePage, children }) => {
  const { isOpen, setIsOpen } = useModalContext();

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

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
      <Modal title="Add new product" open={isOpen}>
        <Form />
      </Modal>
    </>
  );
};

HomePage.defaultProps = {
  titlePage: "Home Page",
};

export default memo(HomePage);
