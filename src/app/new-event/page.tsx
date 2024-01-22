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
      <form
        ref={ref}
        action={async (formData) => {
          ref.current?.reset();
          await addEvent(formData);
        }}
        className="flex w-full flex-col space-y-3 sm:w-[580px]"
      >
        <label htmlFor="name">Name</label>
        <input className={formStyle} type="text" name="name" id="name" />
        <label htmlFor="description">Description</label>
        <textarea
          className={cn(formStyle, "h-[200px]")}
          name="description"
          id="description"
          cols={30}
          rows={10}
        ></textarea>
        <label htmlFor="slug">Slug</label>
        <input className={formStyle} type="text" name="slug" id="slug" />
        <label htmlFor="city">City</label>
        <input className={formStyle} type="text" name="city" id="city" />
        <label htmlFor="location">Location</label>
        <input
          className={formStyle}
          type="text"
          name="location"
          id="location"
        />
        <label htmlFor="date">Date</label>
        <input className={formStyle} type="date" name="date" id="date" />
        <label htmlFor="organizerName">Organizer Name</label>
        <input
          className={formStyle}
          type="text"
          name="organizerName"
          id="organizerName"
        />
        <label htmlFor="imageUrl">Image URL</label>
        <input
          className={formStyle}
          type="text"
          name="imageUrl"
          id="imageUrl"
        />
        <button
          className="bg-blur state-effects mt-5 w-[95vw] rounded-md border-2 border-white/10 bg-white/20 py-2 text-lg capitalize sm:w-full"
          type="submit"
        >
          Create
        </button>
      </form>
    </Main>
  );
}
