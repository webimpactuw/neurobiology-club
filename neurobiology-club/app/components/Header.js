"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";

export default function Header() {
  const pathname = usePathname();

  if (pathname != "/studio") {
    return (
      <nav className="pt-3 sticky top-0 pb-4 bg-[#F4F3F2]">
            <div className="h-14 max-w-7xl p-4 mx-auto flex items-center justify-between">
            <Image src = "/logo.svg"
                href = "/"
                alt = "Neurobiology Logo"
                width = {50}
                height = {50}
                className = "pt-4"
            />
                <ul className="flex items-center justify-end space-x-7 text-lg font-medium">
                    <Link href={"/"} className={`${pathname === "/" ? "active" : ""}`}>
                        HOME
                    </Link>

                    <Link href={"/team"} className={`${pathname === "/team" ? "active" : ""}`}>
                        MEET OUR TEAM
                    </Link>
                    
                    <Link href={"/events"} className={`${pathname === "/events" ? "active" : ""}`}>
                        EVENTS
                    </Link>
                    
                    <Link href={"/mentorship"} className={`${pathname === "/mentorship" ? "active" : ""}`} id="mentorship">
                        MENTORSHIP
                    </Link>

                    <Link href={"/contact"} className={`${pathname === "/contact" ? "active" : ""}`}>
                        CONTACT
                    </Link> 
                </ul>
            </div>
        </nav>
    );
  }
}

// when clicking on a page link, "people page while on people page", you will be moved to the top of the page