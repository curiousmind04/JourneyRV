"use client";

import { SafeListing, SafeUser } from "../types";
import Heading from "../components/Heading";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import ListingCard from "../components/listings/ListingCard";
import Container from "../components/Container";
import classes from "../shared/PageStyling.module.css";

interface VehiclesClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

const VehiclesClient: React.FC<VehiclesClientProps> = ({
  listings,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");

  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/listings/${id}`)
        .then(() => {
          toast.success("Listing deleted");
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );

  return (
    <Container>
      <Heading title="Vehicles" subtitle="List of your RVs" />
      <div className={classes.container}>
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            data={listing}
            actionId={listing.id}
            onAction={onCancel}
            disabled={deletingId === listing.id}
            actionLabel="Delete RV"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};
export default VehiclesClient;
