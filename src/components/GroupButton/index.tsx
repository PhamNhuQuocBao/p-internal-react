import {memo, FC} from "react";
//import components
import Button from "../Button";
//import stylesheets
import "./GroupButton.scss";

export interface TypeButtons {
  type: "primary" | "text" | "danger" | "default";
  children: React.ReactNode | string;
  onClick?: () => void;
}

interface GroupButtonProps {
  items: TypeButtons[];
}

const GroupButton: FC<GroupButtonProps> = ({ items }) => {
  return (
    <div className="btn__group">
      {items.map((item) => (
        <Button type={item.type} onClick={item.onClick}>
          {item.children}
        </Button>
      ))}
    </div>
  );
};

export default memo(GroupButton);
