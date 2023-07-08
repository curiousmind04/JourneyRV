"use client";

import { IconType } from "react-icons";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/dist/client/components/navigation";
import { useCallback } from "react";
import qs from "query-string";
import classes from "./CategoryBox.module.css";

interface CategoryBoxProps {
  label: string;
  icon: IconType;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  label,
  icon: Icon,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    //here we update the category to the one that is clicked
    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    //here we remove category if we click a category that is already chosen
    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={selected ? classes.selected : classes.unselected}
    >
      <Icon size={26} />
      <div className={classes.label}>{label}</div>
    </div>
  );
};
export default CategoryBox;
