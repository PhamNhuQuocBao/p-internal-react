import { FC, ReactNode, memo } from "react";
import "./Tag.scss";

interface TagProps {
  value: unknown;
  children: ReactNode;
  className?: string;
}

const Tag: FC<TagProps> = ({ value, children, className }) => {
  const type =
    (value as string) === "Available"
      ? "primary"
      : (value as string) === "Sold out"
      ? "danger"
      : "default";
  return <span className={`tag tag-${type} ${className}`}>{children}</span>;
};

Tag.defaultProps = {
  className: "",
};

export default memo(Tag);
