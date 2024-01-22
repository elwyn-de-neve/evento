import { TChildrenProps } from "@/lib/types";
import Main from "@/components/main";
import Image from "next/image";
import H1 from "@/components/h1";
import { Metadata } from "next";
import { getEvent } from "@/lib/server-utils";

type TEventPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: TEventPageProps): Promise<Metadata> {
  const { slug } = params;
  const event = await getEvent(slug);

  return {
    title: event.name,
  };
}

export async function generateStaticParams() {
  return [
    {
      slug: "comedy-extravaganza",
    },
    {
      slug: "dj-practice-session",
    },
  ];
}

export default async function EventPage({ params }: TEventPageProps) {
  const { slug } = params;
  const event = await getEvent(slug);

  return (
    <Main>
      <section className="relative flex w-full items-center justify-center overflow-hidden py-14 md:py-20 ">
        <Image
          src={event.imageUrl as string}
          alt="Event Background"
          className="z-0 object-cover blur-3xl"
          fill
          sizes="(min-width: 1280px) 100vw, 1280px"
          quality={50}
          priority
        />
        <div className="z-1 relative flex flex-col gap-6 lg:flex-row lg:gap-16">
          <Image
            src={event.imageUrl as string}
            alt={event.name as string}
            className="rounded-xl border-2 border-white/50 object-cover"
            width={300}
            height={200}
            priority
          />
          <div className="flex flex-col">
            <time
              className="text-white/75"
              dateTime={
                new Date(event.date as Date).toISOString().split("T")[0]
              }
            >
              {new Date(event.date as Date).toLocaleString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </time>
            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-xl text-white/75">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <button className="bg-blur state-effects mt-5 w-[95vw] rounded-md border-2 border-white/10 bg-white/20 py-2 text-lg capitalize sm:w-full lg:mt-auto">
              Get tickets
            </button>
          </div>
        </div>
      </section>
      <div className="space-y-12 px-5 py-16 text-center">
        <Section>
          <SectionHeading>Event Details</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>
        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </Main>
  );
}

function Section({ children }: TChildrenProps) {
  return <section>{children}</section>;
}

function SectionHeading({ children }: TChildrenProps) {
  return <h3 className="mb-4 text-xl font-semibold">{children}</h3>;
}

function SectionContent({ children }: TChildrenProps) {
  return (
    <p className="mx-auto max-w-4xl text-lg leading-8 text-white/75">
      {children}
    </p>
  );
}
