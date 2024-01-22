import H1 from "@/components/h1";
import Main from "@/components/main";
import EventsList from "@/components/events-list";
import { Suspense } from "react";
import Loading from "@/app/events/[city]/loading";
import { Metadata } from "next";
import { capitalize } from "@/lib/utils";
import { z } from "zod";

type TMetadataProps = {
  params: {
    city: string;
  };
};

type TEventsPageProps = TMetadataProps & {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export function generateMetadata({ params }: TMetadataProps): Metadata {
  const { city } = params;
  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default function EventsPage({ params, searchParams }: TEventsPageProps) {
  const { city } = params;
  const parsedPage = pageNumberSchema.safeParse(searchParams.page || 1);
  if (!parsedPage.success) throw new Error("Invalid page number");
  const page = parsedPage.data;

  return (
    <Main className="px-3 py-24 sm:px-9">
      <H1 className="mb-28">
        {city === "all" ? "All Events" : `Events in ${capitalize(city)}`}
      </H1>
      <Suspense key={city + page} fallback={<Loading />}>
        <EventsList city={city} page={Number(page)} />
      </Suspense>
    </Main>
  );
}
