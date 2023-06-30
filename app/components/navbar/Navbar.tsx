"use client";

import Container from "../Container";
import Logo from "./Logo";
import classes from "./Navbar.module.css";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <Container>
          <div className={classes.content}>
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Navbar;
