import * as React from "react";
import "./Select.scss";

export interface TypeOptions {
  label: string;
  value: string;
}

interface SelectProps {
  id?: string;
  name?: string;
  options: Array<TypeOptions>;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ id, name, options, onChange }) => {
  return (
    <select id={id} name={name} className="select" onChange={onChange}>
      {options.map(({ label, value }, index) => (
        <option value={value} key={index}>
          {label}
        </option>
      ))}
    </select>
  );
};

Select.defaultProps = {
  id: "",
  name: "",
};

export default React.memo(Select);
