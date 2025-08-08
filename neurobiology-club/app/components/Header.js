"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (pathname != "/studio") {
    return (
        <nav className="pt-3 sticky top-0 pb-4 bg-gradient-to-b from-[#F4F3F2] to-[#F4F3F2]/0 z-10">
          <div className="h-14 max-w-7xl p-4 mx-auto flex items-center justify-between">
            {/* Mobile Hamburger Button - Left side on mobile */}
            <button 
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span className={`block w-6 h-0.5 bg-[#164EFF] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-[#164EFF] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-[#164EFF] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center justify-end space-x-7 text-lg font-medium">
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

            {/* Logo - Right side on mobile, left side on desktop */}
            <Link href="/" className="md:order-first">
              <Image src = "/logo.svg"
                alt = "Neurobiology Logo"
                width = {50}
                height = {50}
                className = "pt-4"/>
            </Link>
          </div>

          {/* Mobile Navigation Overlay */}
          {isMobileMenuOpen && (
            <div 
              className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
              onClick={toggleMobileMenu}
            ></div>
          )}
          
          {/* Mobile Navigation Sidebar */}
          <div className={`md:hidden fixed top-0 left-0 h-full w-3/4 bg-[#164EFF] shadow-lg transform transition-transform duration-300 ease-in-out z-20 rounded-r-3xl ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex justify-end p-4">
              <button 
                onClick={toggleMobileMenu}
                className="text-white hover:text-gray-200"
                aria-label="Close mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col space-y-4 p-6 text-lg font-semibold text-right text-white">
                <Link 
                  href={"/"} 
                  className="py-2" 
                  onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }}
                >
                  HOME
                </Link>

                <Link 
                  href={"/team"} 
                  className="py-2" 
                  onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }}
                >
                  MEET OUR TEAM
                </Link>
                      
                <Link 
                  href={"/events"} 
                  className="py-2" 
                  onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }}
                >
                  EVENTS
                </Link>
                      
                <Link 
                  href={"/mentorship"} 
                  className="py-2" 
                  onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }}
                >
                  MENTORSHIP
                </Link>

                <Link 
                  href={"/contact"} 
                  className="py-2" 
                  onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }}
                >
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
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }