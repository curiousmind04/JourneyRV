"use client";

import { IconType } from "react-icons";
import classes from "./Button.module.css";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`button ${small ? "small" : ""} ${outline ? "outline" : ""}`}
    >
      {Icon && <Icon size={24} className={classes.icon} />}
      {label}
    </button>
  );
};
export default Button;
