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
  open?: boolean;
}

const Modal: FC<ModalProps> = ({
  title,
  close,
  header,
  children,
  footer,
  open,
}) => {
  return (
    <div className={`overlay modal-${open ? "open" : "hidden"}`}>
      <div className={`modal`}>
        {header || (
          <div className="modal__header">
            <p className="title">{title}</p>
          </div>
        )}
        <img src={close} className="icon-close" />
        {children}
        {footer}
      </div>
    </div>
  );
};

Modal.defaultProps = {
  close: Close,
  open: false,
};

export default memo(Modal);
