"use client";

import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import classes from "./Counter.module.css";

interface CounterProps {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
}

const Counter: React.FC<CounterProps> = ({
  title,
  subtitle,
  value,
  onChange,
}) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const onReduce = useCallback(() => {
    if (value === 1) {
      return;
    }

    onChange(value - 1);
  }, [onChange, value]);

  return (
    <div className={classes.container}>
      <div className={classes.titles}>
        <div className={classes.title}>{title}</div>
        <div className={classes.subtitle}>{subtitle}</div>
      </div>
      <div className={classes.counter}>
        <div onClick={onReduce} className={classes.action}>
          <AiOutlineMinus />
        </div>
        <div className={classes.value}>{value}</div>
        <div onClick={onAdd} className={classes.action}>
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  );
};
export default Counter;
