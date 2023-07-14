import prisma from "@/app/libs/prismadb";

export interface IListingsParams {
  userId?: string;
  occupantsCount?: number;
  bedCount?: number;
  startDate?: string;
  endDate?: string;
  locationValue?: string;
  category?: string;
}

export default async function getListings(params: IListingsParams) {
  try {
    const {
      userId,
      occupantsCount,
      bedCount,
      startDate,
      endDate,
      locationValue,
      category,
    } = params;

    let query: any = {};

    if (userId) {
      query.userId = userId;
    }

    if (category) {
      query.category = category;
    }

    if (occupantsCount) {
      query.occupantsCount = {
        gte: +occupantsCount,
      };
    }

    if (bedCount) {
      query.bedCount = {
        gte: +bedCount,
      };
    }

    if (locationValue) {
      query.locationValue = locationValue;
    }

    //if there is a reservation in the search date days, that
    //listing will be filtered out
    if (startDate && endDate) {
      query.NOT = {
        reservations: {
          some: {
            OR: [
              {
                endDate: { gte: startDate },
                startDate: { lte: startDate },
              },
              {
                startDate: { lte: endDate },
                endDate: { gte: endDate },
              },
            ],
          },
        },
      };
    }

    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));

    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
}
