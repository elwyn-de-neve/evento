import Link from "next/link";
import React from "react";
import SearchEventForm from "@/components/search-event-form";
import H1 from "@/components/h1";
import Main from "@/components/main";

export default function Home() {
  return (
    <Main className="px-3 pb-24 pt-36 sm:px-9">
      <H1>Find events around you</H1>
      <p className="text-1xl mb-12 mt-7 md:text-2xl lg:text-3xl">
        Browse more than{" "}
        <span className="font-bold italic text-accent underline">
          10,000 events
        </span>{" "}
        worldwide
      </p>

      <SearchEventForm />

      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        <p>Popular: </p>
        <ul className="flex gap-x-2 font-semibold">
          <li>
            <Link href="/events/amsterdam">Amsterdam</Link>
          </li>
          <li>
            <Link href="/events/austin">Austin</Link>
          </li>
          <li>
            <Link href="/events/seattle">Seattle</Link>
          </li>
        </ul>
      </section>
    </Main>
  );
}
