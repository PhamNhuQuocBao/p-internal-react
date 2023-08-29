import { memo, FC } from "react";
//import interfaces
import { TypeInput } from "../../interfaces/input";
//import stylesheets
import "./Input.scss";

interface InputProps {
  type?: TypeInput;
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  style?: object;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const Input: FC<InputProps> = ({
  type,
  value,
  id,
  name,
  placeholder,
  style,
  onChange,
}) => {
  return (
    <input
      type={type}
      value={value}
      id={id}
      name={name}
      placeholder={placeholder}
      style={style}
      className={`input-${type} input`}
      onChange={onChange}
    />
  );
};

Input.defaultProps = {
  type: "text",
  id: "",
  name: "",
  placeholder: "",
  value: "",
  style: {},
};

export default memo(Input);
