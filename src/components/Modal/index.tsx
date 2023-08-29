import { memo, FC, ReactNode } from "react";
//import icons
import Close from "../../assets/icons/Close.svg";
//import stylesheets
import "./Modal.scss";

interface ModalProps {
  title: string;
  close?: string;
  header?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
}

const Modal: FC<ModalProps> = ({ title, close, header, children, footer }) => {
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

export default memo(Modal);
