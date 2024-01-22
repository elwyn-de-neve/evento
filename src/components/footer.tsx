import Link from "next/link";

const routes = [
  {
    name: "Terms & Conditions",
    path: "/terms-conditions",
  },
  {
    name: "Privacy Policy",
    path: "/privacy-policy",
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto flex h-16 items-center justify-between border-t border-white/10 px-3 text-sm text-white/25 sm:px-9">
      <small className="text-xs">
        &copy; 2024 Elwyn de Neve. All rights reserved.
      </small>
      <ul className="flex gap-x-3 sm:gap-x-8">
        {routes.map((route) => (
          <li className="transition hover:text-white" key={route.path}>
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
