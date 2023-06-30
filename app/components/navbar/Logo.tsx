"use client";

import Image from "next/image";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <h1 className={classes.logo}>
      Journey<span>RV</span>
    </h1>
  );
};
export default Logo;
