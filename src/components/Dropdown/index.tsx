import { FC, ReactNode, memo, useCallback, useState } from "react";
//import components
import DropItem from "./DropItem";
//import stylesheets
import "./Dropdown.scss";
//import custom hooks
import { useModalContext } from "../../hooks/useModal";
import { useIdSelected } from "../../hooks/useIdSelected";

interface DropDownProps {
  children: ReactNode;
  id: number;
}

const DropDown: FC<DropDownProps> = ({ children, id }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { setIsConfirmDeleteOpen } = useModalContext();
  const { setIdSelected } = useIdSelected();

  const handleOpen = useCallback(() => {
    setOpen(!open);
  }, []);

  const handleClickEdit = useCallback(() => {}, []);
  const handleClickDelete = useCallback(() => {
    setIdSelected(id);
    setIsConfirmDeleteOpen(true);
  }, [id, setIdSelected, setIsConfirmDeleteOpen]);

  return (
    <div className="menu">
      <div className="trigger__menu" onClick={handleOpen}>
        {children}
      </div>
      <div className={`dropdown__menu ${open ? "active" : "inactive"}`}>
        <ul className="list__dropdown">
          <DropItem onClick={handleClickEdit}>Edit</DropItem>
          <DropItem onClick={handleClickDelete} type="danger">
            Delete
          </DropItem>
        </ul>
      </div>
    </div>
  );
};

export default memo(DropDown);
