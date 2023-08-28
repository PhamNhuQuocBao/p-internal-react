import * as React from "react";
import "./App.css";
import Modal from "./components/Modal";
import Form from "./components/Form";

const App: React.FC = () => {
  return <>
    <Modal title="Add new product">
      <Form/>
    </Modal>
  </>;
};

export default App;
