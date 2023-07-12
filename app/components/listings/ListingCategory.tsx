"use client";

import { IconType } from "react-icons";
import classes from "./ListingCategory.module.css";

interface ListingCategoryProps {
  label: string;
  icon: IconType;
  description: string;
}

const ListingCategory: React.FC<ListingCategoryProps> = ({
  icon: Icon,
  label,
  description,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <Icon size={40} className={classes.icon} />
        <div className={classes.details}>
          <div className={classes.label}>{label}</div>
          <div className={classes.description}>{description}</div>
        </div>
      </div>
    </div>
  );
};
export default ListingCategory;
