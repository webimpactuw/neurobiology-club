"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";

export default function Header() {
  const pathname = usePathname();

  if (pathname != "/studio") {
    return (
        <nav className="pt-3 sticky top-0 pb-4 bg-gradient-to-b from-[#F4F3F2] to-[#F4F3F2]/0">
            <div className="h-14 max-w-7xl p-4 mx-auto flex items-center justify-between">
                <Image src = "/logo.svg"
                    href = "/"
                    alt = "Neurobiology Logo"
                    width = {50}
                    height = {50}
                    className = "pt-4"
                />
                <ul className="flex items-center justify-end space-x-7 text-lg font-medium">
                    <Link href={"/"} className={`${pathname === "/" ? "active" : ""}`} onClick={scrollToTop}>
                        HOME
                    </Link>

                    <Link href={"/team"} className={`${pathname === "/team" ? "active" : ""}`} onClick={scrollToTop}>
                        MEET OUR TEAM
                    </Link>
                    
                    <Link href={"/events"} className={`${pathname === "/events" ? "active" : ""}`} onClick={scrollToTop}>
                        EVENTS
                    </Link>
                    
                    <Link href={"/mentorship"} className={`${pathname === "/mentorship" ? "active" : ""}`} id="mentorship"
                          onClick={scrollToTop}>
                        MENTORSHIP
                    </Link>

                    <Link href={"/contact"} className={`${pathname === "/contact" ? "active" : ""}`} onClick={scrollToTop}>
                        CONTACT
                    </Link> 
                </ul>
            </div>
            <div id="gradient"></div>
        </nav>
    );
  }
}

  function scrollToTop(event) {
    if (window.location.pathname === event.currentTarget.getAttribute('href')) {
      event.preventDefault(); // Prevent default link behavior
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }