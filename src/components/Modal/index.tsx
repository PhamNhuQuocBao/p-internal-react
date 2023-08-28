import React from "react";
import Close from "../../assets/icons/Close.svg";
import "./Modal.scss";

interface ModalProps {
  title: string;
  close?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  title,
  close,
  header,
  children,
  footer,
}) => {
  return (
    <div className="overlay modal">
      {header || (
        <div className="modal__header">
          <p className="title">{title}</p>
          <img src={close} className="icon-close" />
        </div>
      )}
      {children}
      {footer}
    </div>
  );
};

Modal.defaultProps = {
  close: Close,
};

export default React.memo(Modal);
