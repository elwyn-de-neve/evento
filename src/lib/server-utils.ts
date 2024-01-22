import "server-only";
import { unstable_cache } from "next/cache";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import { capitalize } from "@/lib/utils";

export const getEvents = unstable_cache(
  async (city: string, page: number = 1) => {
    const events = await prisma.event.findMany({
      where: {
        city: city === "all" ? undefined : capitalize(city),
      },
      orderBy: {
        date: "asc",
      },
      take: 6,
      skip: (page - 1) * 6,
    });

    if (!events || events.length === 0) {
      return notFound();
    }

    const totalCount = await prisma.event.count({
      where: {
        city: city === "all" ? undefined : capitalize(city),
      },
    });

    return { events, totalCount };
  },
);

export const getEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.event.findUnique({
    where: {
      slug,
    },
  });
  if (!event) {
    return notFound();
  }
  return event;
});
