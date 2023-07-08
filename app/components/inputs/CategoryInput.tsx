"use client";

import { IconType } from "react-icons";
import classes from "./CategoryInput.module.css";

interface CategoryInputProps {
  onClick: (value: string) => void;
  label: string;
  icon: IconType;
  selected?: boolean;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  onClick,
  label,
  icon: Icon,
  selected,
}) => {
  return (
    <div
      className={selected ? classes.selected : classes.unselected}
      onClick={() => onClick(label)}
    >
      <Icon size={30} />
      <div className={classes.label}>{label}</div>
    </div>
  );
};
export default CategoryInput;
