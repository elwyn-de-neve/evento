"use server";
import prisma from "@/lib/db";

export const addEvent = async (formData: FormData) => {
  await prisma.event.create({
    data: {
      name: formData.get("name") as string,
      slug: formData.get("slug") as string,
      city: formData.get("city") as string,
      location: formData.get("location") as string,
      date: "2030-11-20T00:00:00.000Z",
      organizerName: formData.get("organizerName") as string,
      imageUrl:
        "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
      description: formData.get("description") as string,
    },
  });
};
