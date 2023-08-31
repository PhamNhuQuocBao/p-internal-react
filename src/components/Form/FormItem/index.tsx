import { memo, FC, ReactNode } from "react";
//import stylesheets
import "./FormItem.scss";

interface FormItemProps {
  label?: string;
  children: ReactNode;
  classNameError?: string;
  className?: string;
  errorValue?: string;
}

const FormItem: FC<FormItemProps> = ({
  label,
  children,
  className,
  classNameError,
  errorValue,
}) => {
  return (
    <div className={className}>
      {label && <label className="form__label">{label}</label>}
      {children}
      {errorValue && <span className={classNameError}>{errorValue}</span>}
    </div>
  );
};

FormItem.defaultProps = {
  label: "",
  className: "form-group",
  classNameError: "error-message",
  errorValue: "",
};

export default memo(FormItem);
