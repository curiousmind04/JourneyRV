"use client";

import { useRouter } from "next/navigation";
import Heading from "./Heading";
import Button from "./Button";
import classes from "./EmptyState.module.css";

interface EmptyState {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyState> = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters",
  showReset,
}) => {
  const router = useRouter();

  return (
    <div className={classes.container}>
      <Heading center title={title} subtitle={subtitle} />
      <div className={classes.button}>
        {showReset && (
          <Button
            outline
            label="Remove all filters"
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
};
export default EmptyState;
