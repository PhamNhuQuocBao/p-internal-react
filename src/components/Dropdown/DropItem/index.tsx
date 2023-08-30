import { memo, FC, ReactNode, useCallback } from "react";

interface DropItemProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "text" | "danger";
}

const DropItem: FC<DropItemProps> = ({ children, onClick, type }) => {
  const handleOnClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

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
