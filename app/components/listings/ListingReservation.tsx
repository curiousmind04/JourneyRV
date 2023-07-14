"use client";

import { Range } from "react-date-range";
import Calendar from "../inputs/Calendar";
import Button from "../Button";
import classes from "./ListingReservation.module.css";

interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  totalPrice,
  dateRange,
  disabledDates,
  disabled,
  onChangeDate,
  onSubmit,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.priceContainer}>
        <div className={classes.price}>$ {price}</div>
        <div className={classes.duration}>day</div>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <hr />
      <div className={classes.button}>
        <Button disabled={disabled} label="Reserve" onClick={onSubmit} />
      </div>
      <div className={classes.totalPrice}>
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
    </div>
  );
};
export default ListingReservation;
