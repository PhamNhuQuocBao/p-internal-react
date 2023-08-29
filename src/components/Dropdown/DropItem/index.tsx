import { memo, FC, ReactNode } from "react";

interface DropItemProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "text" | "danger";
}

const DropItem: FC<DropItemProps> = ({ children, onClick, type }) => {
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <li
      className={`dropdown__item dropdown__item-${type}`}
      onClick={handleOnClick}
    >
      {children}
    </li>
  );
};

DropItem.defaultProps = {
  type: "text",
};

export default memo(DropItem);
