import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between mx-auto">
      <div>
        <p className = "h-67 pb-10 pt-10 pl-24"> Copyright  &copy; {new Date().getFullYear()} UW Neurobiology | Web Impact UW</p>
      </div>

      <div className="flex items-center mr-32">
        <Link href="https://www.instagram.com/uwneurobiologyclub/#" target="_blank">
          <Image src="/Instagram.png"
            alt="Instagram logo + link"
            width = {50}
            height = {50}
            className = ""/>
        </Link>
        <Link href="https://discord.com/invite/bpRed7s5" target="_blank">
          <Image src = "/Discord.png"
            alt="Discord logo + link"
            width = {40}
            height = {40}
            className = ""/>
        </Link>
      </div>
    </footer>
  );
}