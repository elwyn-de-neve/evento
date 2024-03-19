"use client";

import Main from "@/components/main";
import H1 from "@/components/h1";
import { cn } from "@/lib/utils";
import { addEvent } from "@/actions/create-action";
import { useRef } from "react";

const formStyle =
  "h-14 w-full rounded-lg bg-white/[7%] px-6 py-3 outline-none transition focus:bg-white/10 focus:ring-2 focus:ring-accent/50";

export default function Page() {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <Main className="px-3 pb-24 pt-36 sm:px-9">
      <H1>Create a new event</H1>
      <p>Fill out the form below to create a new event</p>
      <form
        ref={ref}
        action={async (formData) => {
          ref.current?.reset();
          await addEvent(formData);
        }}
        className="mt-4 flex w-full flex-col space-y-3 sm:w-[580px]"
      >
        <label htmlFor="name">Name</label>
        <input className={formStyle} type="text" name="name" id="name" />
        <label htmlFor="description">Description</label>
        <textarea
          className={cn(formStyle, "h-[150px]")}
          name="description"
          id="description"
          cols={30}
          rows={6}
        ></textarea>
        <div className="mb-8 grid grid-cols-1 gap-x-4 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="mb-2" htmlFor="slug">
              Slug
            </label>
            <input className={formStyle} type="text" name="slug" id="slug" />
            <label className="mb-2" htmlFor="city">
              City
            </label>
            <input className={formStyle} type="text" name="city" id="city" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="mb-2" htmlFor="location">
              Location
            </label>
            <input
              className={formStyle}
              type="text"
              name="location"
              id="location"
            />
            <label className="mb-2" htmlFor="date">
              Date
            </label>
            <input className={formStyle} type="date" name="date" id="date" />
          </div>
        </div>
        <label className="mb-2" htmlFor="organizerName">
          Organizer Name
        </label>
        <input
          className={formStyle}
          type="text"
          name="organizerName"
          id="organizerName"
        />
        <br />
        <button
          className="bg-blur state-effects mt-6 w-[95vw] rounded-md border-2 border-white/10 bg-white/20 py-2 text-lg capitalize sm:w-full"
          type="submit"
        >
          Create
        </button>
      </form>
    </Main>
  );
}
