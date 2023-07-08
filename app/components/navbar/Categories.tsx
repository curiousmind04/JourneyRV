"use client";

import Container from "../Container";
import {
  TbSquareLetterS,
  TbSquareLetterM,
  TbSquareLetterL,
} from "react-icons/tb";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import classes from "./Categories.module.css";

export const categories = [
  {
    label: "Small",
    icon: TbSquareLetterS,
    description: "This RV is a small size!",
  },
  {
    label: "Medium",
    icon: TbSquareLetterM,
    description: "This RV is a medium size!",
  },
  {
    label: "Large",
    icon: TbSquareLetterL,
    description: "This RV is a large size!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className={classes.container}>
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};
export default Categories;
