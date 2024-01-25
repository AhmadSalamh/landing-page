"use client";
import Link from "next/link";
import styles from "./Navbar.scss";
import { usePathname } from "next/navigation";
import { links } from "./data";
import Logo from "@/elements/Logo/Logo";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className="pt-3 pb-3 shadow-zinc-500 shadow-sm nav-bar"
      role="navigation"
      aria-label="Main"
    >
      <div
        onClick={() => setOpen(false)}
        role="button"
        tabIndex={0}
        className={`over ${open ? "active" : ""}`}
      ></div>
      <div className="container flex justify-between items-center ms-auto me-auto ">
        <Logo role="img" aria-label="Logo" />
        <div>
          <div
            className={`listItems  md:flex  items-center gap-5 ${
              open ? "active" : ""
            }`}
          >
            {links.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                className={`link ${pathname === item.url ? "active" : ""}`}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <button
            onClick={() => setOpen(!open)}
            onKeyPress={(e) => e.key === "Enter" && setOpen(!open)}
            className="md:hidden"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
