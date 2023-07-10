"use client";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { SafeUser } from "../types";
import classes from "./HeartButton.module.css";

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser,
}) => {
  const hasFavorited = false;
  const toggleFavorite = () => {};

  return (
    <div onClick={toggleFavorite} className={classes.container}>
      <AiOutlineHeart size={28} className={classes.outline} />
      <AiFillHeart
        size={24}
        className={hasFavorited ? classes.favorited : classes.unfavorited}
      />
    </div>
  );
};
export default HeartButton;
