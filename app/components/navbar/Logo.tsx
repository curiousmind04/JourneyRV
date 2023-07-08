"use client";

import { useRouter } from "next/navigation";
// import Image from "next/image";
import classes from "./Logo.module.css";

const Logo = () => {
  const router = useRouter();

  return (
    <h1
      onClick={() => {
        router.push("/");
      }}
      className={classes.logo}
    >
      Journey<span>RV</span>
    </h1>
  );
};
export default Logo;
