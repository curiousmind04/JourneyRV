"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./UserMenu.module.css";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <div onClick={() => {}} className={classes.rent}>
          Rent your RV
        </div>
        <div onClick={toggleOpen} className={classes.menuAction}>
          <AiOutlineMenu />
          <div className={classes.avatar}>
            <Avatar />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={classes.menu}>
          <div className={classes.menuInner}>
            <>
              <MenuItem onClick={() => {}} label="Login" />
              <MenuItem onClick={() => {}} label="Sign up" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};
export default UserMenu;
