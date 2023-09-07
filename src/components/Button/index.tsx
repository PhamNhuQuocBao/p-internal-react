import { memo, FC } from "react";
//import stylesheets
import "./Button.scss";

interface ButtonProps {
  children: React.ReactNode;
  type?: "primary" | "text" | "danger" | "default";
  style?: object;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  type,
  style,
  children,
  icon,
  className,
  onClick,
}) => {

  return (
    <>
      <button
        className={`${className} btn btn-${type} ${icon ? "btn-icon" : ""}`}
        style={style}
        onClick={onClick}
      >
        {icon}
        {children}
      </button>
    </>
  );
};

Button.defaultProps = {
  type: "default",
  style: {},
  icon: undefined,
  className: "",
  onClick: () => {},
};

export default memo(Button);
