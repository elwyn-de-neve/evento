"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";

const citySchema = z
  .string()
  .min(3, "City name must be at least 3 characters")
  .max(20, "City name must not exceed 20 characters");

export default function SearchEventForm() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsedCity = citySchema.safeParse(searchQuery);
    if (!parsedCity.success) throw new Error("Invalid city name");
    const city = parsedCity.data;
    router.push(`/events/${city}`);
    setSearchQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        className="h-14 w-full rounded-lg bg-white/[7%] px-6 outline-none transition focus:bg-white/10 focus:ring-2 focus:ring-accent/50"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        spellCheck={false}
        placeholder="Search events in a city..."
      />
    </form>
  );
}
