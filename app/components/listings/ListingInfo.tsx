"use client";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import { IconType } from "react-icons";
import Avatar from "../Avatar";
// import ListingCategory from "./ListingCategory";
import dynamic from "next/dynamic";
import classes from "./ListingInfo.module.css";
import ListingCategory from "./ListingCategory";

const Map = dynamic(() => import("../Map"), {
  ssr: false,
});

interface ListingInfoProps {
  user: SafeUser;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  description: string;
  bedCount: number;
  occupantsCount: number;
  locationValue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  category,
  description,
  bedCount,
  occupantsCount,
  locationValue,
}) => {
  const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlng;
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <div className={classes.author}>
          <div>Hosted by {user?.name}</div>
          <Avatar src={user?.image} />
        </div>
        <div className={classes.details}>
          <div>{occupantsCount} occupants</div>
          <div>{bedCount} beds</div>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}
      <hr />
      <div className={classes.description}>{description}</div>
      <hr />
      <Map center={coordinates} />
    </div>
  );
};
export default ListingInfo;
