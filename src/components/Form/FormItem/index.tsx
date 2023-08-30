import { memo, FC, ReactNode } from "react";
//import stylesheets
import "./FormItem.scss";

interface FormItemProps {
  label?: string;
  children: ReactNode;
  classNameError?: string;
  className?: string;
}

const FormItem: FC<FormItemProps> = ({
  label,
  children,
  className,
  classNameError,
}) => {
  return (
    <div className={className}>
      {label && <label className="form__label">{label}</label>}
      {children}
      <span className={classNameError}></span>
    </div>
  );
};

FormItem.defaultProps = {
  label: "",
  className: "form-group",
  classNameError: "error-message",
};

export default memo(FormItem);
