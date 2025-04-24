"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  if (pathname != "/studio") {
    return (
      <nav className="pt-3">
            <div className="h-14 max-w-7xl p-4 mx-auto flex items-center justify-between">
            <Image src = "/logo.svg"
                href = "/"
                alt = "Neurobiology Logo"
                width = {50}
                height = {50}
                className = "pt-4"
            />
                <ul className="flex items-center justify-end space-x-8 text-lg font-medium">
                    <Link href={"/"} className={`${pathname === "/" ? "active" : ""}`}>
                        HOME
                    </Link>

                    <Link href={"/events"} className={`${pathname === "/events" ? "active" : ""}`}>
                        EVENTS
                    </Link>

                    <Link href={"/team"} className={`${pathname === "/team" ? "active" : ""}`}>
                        MEET OUR TEAM
                    </Link>
                    
                    <Link href={"/contact"} className={`${pathname === "/contact" ? "active" : ""}`}>
                        CONTACT
                    </Link>

                    <Link href={"/opportunities"} className={`${pathname === "/opportunities" ? "active" : ""}`}>
                        OPPORTUNITIES
                    </Link>
                    <Link href={"/mentorship"} className={`${pathname === "/mentorship" ? "active" : ""}`} id="mentorship">
                        MENTORSHIP
                    </Link>
                </ul>
            </div>
        </nav>
    );
  }
}

// when clicking on a page link, "people page while on people page", you will be moved to the top of the page