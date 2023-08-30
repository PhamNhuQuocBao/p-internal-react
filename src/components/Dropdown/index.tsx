import { FC, ReactNode, memo, useCallback, useState } from "react";
import DropItem from "./DropItem";
import "./Dropdown.scss";

interface DropDownProps {
  children: ReactNode;
}

const DropDown: FC<DropDownProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = useCallback(() => {
    setOpen(!open);
  }, []);

  return (
    <div className="menu">
      <div className="trigger__menu" onClick={handleOpen}>
        {children}
      </div>
      <div className={`dropdown__menu ${open ? "active" : "inactive"}`}>
        <ul className="list__dropdown">
          <DropItem>Edit</DropItem>
          <DropItem type="danger">Delete</DropItem>
        </ul>
      </div>
    </div>
  );
};

export default memo(DropDown);
