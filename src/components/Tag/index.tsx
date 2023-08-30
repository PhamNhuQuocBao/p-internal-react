import { FC, ReactNode, memo } from "react";
import "./Tag.scss";

interface TagProps {
  value: string | number;
  children: ReactNode;
  className?: string;
}

const Tag: FC<TagProps> = ({ value, children, className }) => {
  let type: string;
  switch (value) {
    case "Available":
      type = "primary";
      break;
    case "Sold out":
      type = "danger";
      break;
    default:
      type = "default";
  }

  return <span className={`tag tag-${type} ${className}`}>{children}</span>;
};

Tag.defaultProps = {
  className: "",
};

export default memo(Tag);
