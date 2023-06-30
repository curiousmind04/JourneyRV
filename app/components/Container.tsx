"use client";

import classes from "./Container.module.css";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};
export default Container;
