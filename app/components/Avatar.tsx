"use client";

import Image from "next/image";
// import classes from "./Avatar.module.css";

const imageStyle = {
  borderRadius: "9999px",
  display: "block",
};

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      style={imageStyle}
      alt="avatar"
      height="30"
      width="30"
      src={src || "/images/placeholder.jpg"}
    />
  );
};
export default Avatar;
