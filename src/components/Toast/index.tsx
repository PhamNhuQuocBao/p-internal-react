import { FC, memo } from "react";
//import stylesheets
import "./Toast.scss";

interface ToastProps {
  type?: string;
  title?: string;
  content?: string;
}

const Toast: FC<ToastProps> = ({ type, title, content }) => {
  return (
    <div className={`toast toast-${type}`}>
      <h3 className="toast__title">{title}</h3>
      <p className="toast__content">{content}</p>
    </div>
  );
};

Toast.defaultProps = {
  type: "success",
  title: "Toast",
  content: "",
};

export default memo(Toast);
