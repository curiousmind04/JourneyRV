"use client";

import { BiSearch } from "react-icons/bi";

import classes from "./Search.module.css";
import useSearchModal from "@/app/hooks/useSearchModal";
import { useSearchParams } from "next/navigation";
import useCountries from "@/app/hooks/useCountries";
import { useMemo } from "react";
import { differenceInDays } from "date-fns";

const Search = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();
  const { getByValue } = useCountries();

  const locationValue = params?.get("locationValue");
  const startDate = params?.get("startDate");
  const endDate = params?.get("endDate");
  const occupantsCount = params?.get("occupantsCount");

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label;
    }

    return "Anywhere";
  }, [locationValue, getByValue]);

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      let diff = differenceInDays(end, start);

      if (diff === 0) {
        diff = 1;
      }

      return `${diff} Days`;
    }

    return "Any Week";
  }, [startDate, endDate]);

  const occupantsLabel = useMemo(() => {
    if (occupantsCount) {
      return `${occupantsCount} Occupants`;
    }

    return "Add Occupants";
  }, [occupantsCount]);

  return (
    <div onClick={searchModal.onOpen} className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.location}>{locationLabel}</div>
        <div className={classes.time}>{durationLabel}</div>
        <div className={classes.right}>
          <div className={classes.occupants}>{occupantsLabel}</div>
          <div className={classes.icon}>
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
