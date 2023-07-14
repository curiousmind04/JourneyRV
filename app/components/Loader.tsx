"use client";

import { PuffLoader } from "react-spinners";
import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={classes.container}>
      <PuffLoader size={100} color="red" />
    </div>
  );
};
export default Loader;
