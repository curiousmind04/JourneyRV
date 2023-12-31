"use client";

import classes from "./MenuItem.module.css";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div className={classes.item} onClick={onClick}>
      {label}
    </div>
  );
};
export default MenuItem;
