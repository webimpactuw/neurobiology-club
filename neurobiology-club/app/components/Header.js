"use client"
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  if (pathname != "/studio") {
    return ();
  }
}