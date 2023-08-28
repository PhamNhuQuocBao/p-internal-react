import React from "react";
import "./Button.scss";

interface ButtonProps {
  children: React.ReactNode;
  type?: "primary" | "text" | "danger" | "default";
  style?: object;
  icon?: React.ReactNode;
  className?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type,
  style,
  children,
  icon,
  className,
  onClick,
}) => {
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <>
      <button
        className={`${className} btn btn-${type} ${icon ?? "btn-icon"}`}
        style={style}
        onClick={handleOnClick}
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
};

export default React.memo(Button);
