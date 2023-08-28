import * as React from "react";
import "./FormItem.scss";

interface FormItemProps {
  label?: string;
  children: React.ReactNode;
  classNameError: string;
  className?: string;
}

const FormItem: React.FC<FormItemProps> = ({
  label,
  children,
  className,
  classNameError,
}) => {
  return (
    <div className={className}>
      {label && <label>{label}</label>}
      {children}
      <span className={classNameError}></span>
    </div>
  );
};

FormItem.defaultProps = {
  label: "",
  className: "form-group",
};

export default React.memo(FormItem);
