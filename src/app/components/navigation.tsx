"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Page = {
  title: string;
  path: `/${string}`;
};

// You can dynamically populate this array or import it from an external source
const pages: Page[] = [
  { title: "Case Studies", path: "/case-studies" },
  { title: "Industries", path: "/industries" },
  { title: "Services", path: "/services" },
  { title: "Blog", path: "/blog" },
  { title: "About Us", path: "/about" },
  { title: "Contact Us", path: "/contact" },
];

function processPage(page: Page, index: number, pathname: string) {
  return (
    <li key={index}>
      <Link
        href={page.path}
        className={
          pathname === page.path ? "font-extrabold text-slate-600" : ""
        }
      >
        {page.title}
      </Link>
    </li>
  );
}

export function Navigation() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex justify-center space-x-4 mt-8">
        {pages.map((page, index) => processPage(page, index, pathname))}
      </ul>
    </nav>
  );
}
