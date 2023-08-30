import * as React from "react";
//import stylesheets
import "./Select.scss";

export interface TypeOptions {
  label: string;
  value: string;
  disable: boolean;
}

interface SelectProps {
  id?: string;
  name?: string;
  value?: string;
  options: Array<TypeOptions>;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({
  id,
  name,
  options,
  onChange,
  value,
}) => {
  return (
    <select
      id={id}
      name={name}
      className="select"
      onChange={onChange}
      value={value}
    >
      {options.map(({ label, value, disable }, index) => (
        <option value={value} key={index} disabled={disable}>
          {label}
        </option>
      ))}
    </select>
  );
};

Select.defaultProps = {
  id: "",
  name: "",
  value: "Available",
};

export default React.memo(Select);
