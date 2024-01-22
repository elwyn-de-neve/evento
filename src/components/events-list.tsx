import EventCard from "@/components/event-card";
import { getEvents } from "@/lib/server-utils";
import PaginationControls from "@/components/pagination-controls";

type EventsListProps = {
  city: string;
  page: number;
};
export default async function EventsList({ city, page }: EventsListProps) {
  const { events, totalCount } = await getEvents(city, page);

  const prevPagePath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPagePath =
    totalCount > page * 6 ? `/events/${city}?page=${page + 1}` : "";

  return (
    <section className="flex w-full max-w-[1100px] flex-wrap justify-center gap-10">
      {events.map((event) => {
        return <EventCard key={event.id} event={event} />;
      })}
      <PaginationControls
        prevPagePath={prevPagePath}
        nextPagePath={nextPagePath}
      />
    </section>
  );
}
