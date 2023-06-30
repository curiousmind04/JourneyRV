"use client";

import Image from "next/image";
// import classes from "./Avatar.module.css";

const imageStyle = {
  borderRadius: "9999px",
  display: "block",
};

const Avatar = () => {
  return (
    <Image
      style={imageStyle}
      alt="avatar"
      height="30"
      width="30"
      src={"/images/placeholder.jpg"}
    />
  );
};
export default Avatar;
