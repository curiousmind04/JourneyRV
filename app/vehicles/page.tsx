import getCurrentUser from "../actions/getCurrentUser";
import getListings from "../actions/getListings";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import VehiclesClient from "./VehiclesClient";

const VehiclesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }

  const listings = await getListings({
    userId: currentUser.id,
  });

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No vehicles found"
          subtitle="Looks like you have no vehicles. "
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <VehiclesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default VehiclesPage;
