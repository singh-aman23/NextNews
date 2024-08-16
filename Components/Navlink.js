"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classes from "./Navlink.module.css";

export default function Navlink({ href, children }) {
  const path = usePathname();
  const isActive = href === '/' ? path === '/' : path.startsWith(href);

  return (
    <Link
      href={href}
      className={isActive ? classes.active : classes.notActive}
    >
      {children}
    </Link>
  );
}
