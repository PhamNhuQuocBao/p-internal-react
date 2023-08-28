import * as React from "react";
import { TypeInput } from "../../interfaces/input";
import "./Input.scss";

interface InputProps {
  type?: TypeInput;
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  style?: object;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const Input: React.FC<InputProps> = ({
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

export default React.memo(Input);
