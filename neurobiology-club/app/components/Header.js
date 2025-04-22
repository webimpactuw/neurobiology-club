"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  if (pathname != "/studio") {
    return (
      <nav className="">
                <div className="h-14 max-w-7xl p-4 mx-auto flex items-center justify-between">
                <Link href="#" className="text-xl font-bold md:hover:underline">
                    <i> ... </i>
                </Link>
                    <ul className="flex items-center justify-end space-x-4 text-lg font-larde">
                        <li className="md:hover:underline">
                            <Link href="/"> HOME </Link>
                        </li>
                        <li className="md:hover:underline">
                            <Link href="/events"> EVENTS </Link>
                        </li>
                        <li className="md:hover:underline">
                            <Link href="/team"> MEET OUR TEAM </Link>
                        </li>
                        <li className="md:hover:underline">
                            <Link href="contact"> CONTACT </Link>
                        </li>
                        <li className="md:hover:underline">
                            <Link href="/opportunities"> OPPORTUNITIES </Link>
                        </li>
                        <li className="md:hover:underline">
                            <Link href="/mentorship"> MENTORSHIP </Link>
                        </li>
                    </ul>
                </div>
            </nav>
    );
  }
}