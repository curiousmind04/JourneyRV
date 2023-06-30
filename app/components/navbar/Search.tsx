"use client";

import { BiSearch } from "react-icons/bi";

import classes from "./Search.module.css";

const Search = () => {
  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.location}>Anywhere</div>
        <div className={classes.time}>Any week</div>
        <div className={classes.right}>
          <div className={classes.occupants}>Add Occupants</div>
          <div className={classes.icon}>
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
